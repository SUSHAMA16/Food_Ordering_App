import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Confirmation from "../pages/Confirmation"; 

const stripePromise = loadStripe("pk_test_51N3KnBSGGMqnWtddhGi0hiaO6FR2VWNBHGRW5b9jsKsPkr7Zh9QayIUdp8mVGRQngXl5spGj5cZuxTu3Q02m5WP900r06GBdTZ");

const CheckoutForm = ({ onSuccess, setPaymentComplete, setShippingInfo }) => {
  const [enterName, setEnterName] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentError(null);
      setPaymentSuccess(paymentMethod.id);
      
      axios
        .post("/api/payment", { amount: totalAmount, paymentMethodId: paymentMethod.id })
        .then((response) => {
          onSuccess(); 
          setPaymentComplete(true); 
          setShippingInfo({ name: enterName, phone: enterNumber, country: enterCountry, city: enterCity, postalCode: postalCode }); // Set shipping info
        })
        .catch((error) => {
          console.error("Error:", error); 
        });
    }
  };

  return (
    <form className="checkout__form" onSubmit={submitHandler}>
      <div className="form__group">
        <input
          type="text"
          placeholder="Enter your name"
          required
          onChange={(e) => setEnterName(e.target.value)}
        />
      </div>
      <div className="form__group">
        <input
          type="number"
          placeholder="Phone number"
          required
          onChange={(e) => setEnterNumber(e.target.value)}
        />
      </div>
      <div className="form__group">
        <input
          type="text"
          placeholder="Country"
          required
          onChange={(e) => setEnterCountry(e.target.value)}
        />
      </div>
      <div className="form__group">
        <input
          type="text"
          placeholder="City"
          required
          onChange={(e) => setEnterCity(e.target.value)}
        />
      </div>
      <div className="form__group">
        <input
          type="number"
          placeholder="Postal code"
          required
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
      <div className="form__group">
        <CardElement />
      </div>
      <button className="addTOCart__btn" disabled={!stripe}>
        Pay {totalAmount} with Stripe
      </button>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && <p style={{ color: "green" }}>Payment successful!</p>}
    </form>
  );
};

const Checkout = () => {
  const [paymentComplete, setPaymentComplete] = useState(false); 
  const [shippingInfo, setShippingInfo] = useState(null); 

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              {!paymentComplete && (
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    onSuccess={() => {}}
                    setPaymentComplete={setPaymentComplete}
                    setShippingInfo={setShippingInfo} 
                  />
                </Elements>
              )}
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>Rs{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>Rs{shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>Rs{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {paymentComplete && shippingInfo && <Confirmation shippingInfo={shippingInfo} totalAmount={totalAmount} />} {/* Render Confirmation component only if payment is complete and shippingInfo is not null */}
    </Helmet>
  );
};

export default Checkout;
