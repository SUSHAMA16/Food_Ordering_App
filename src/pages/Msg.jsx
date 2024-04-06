// OrderConfirmation.jsx

import React from 'react';
import '../styles/msg.css';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";


const OrderConfirmation = () => {
  return (
    <Helmet title="Msg">
      <CommonSection title="Msg" />
      <section>
      <Container>

    

    <div className="order-confirmation">
    <p className='msg'>
      Your order is confirmed, plz wait for your order...
      <br />
      Thanks for choosing Fresh Treat...
    </p>

    </div>
    </Container>
    </section>
    </Helmet>
  );
};

export default OrderConfirmation;
