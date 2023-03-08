// Importing react
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
 return (
  <Container>
   <h1>Checkout success </h1>
   <p>Your items is on the way!</p>
   <p>We hope that you will be happy with you order</p>
   <Link to="/">Back to home page</Link>
  </Container>
 );
};

export default Checkout;
