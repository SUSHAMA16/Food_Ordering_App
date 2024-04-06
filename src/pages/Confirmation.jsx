import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import Checkout from "../pages/Checkout";

const Confirmation = ({ shippingInfo, totalAmount }) => {
  
  if (!shippingInfo) {
    return <p>No shipping information available.</p>;
  }

  return (
    <Helmet title="Confirmation">
      <CommonSection title="Order Confirmation" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <div>
                <h6 className="mb-4">Shipping Information</h6>
                <p><strong>Name:</strong> {shippingInfo.name}</p>
                <p><strong>Phone Number:</strong> {shippingInfo.phone}</p>
                <p><strong>Country:</strong> {shippingInfo.country}</p>
                <p><strong>City:</strong> {shippingInfo.city}</p>
                <p><strong>Postal Code:</strong> {shippingInfo.postalCode}</p>
              </div>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Order Total: <span>Rs{totalAmount}</span>
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Confirmation;
