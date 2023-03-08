// Importing react
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
 return (
  <>
   <h1>Cart</h1>
   <Link to="/checkout">checkout</Link>
  </>
 );
};

export default Cart;
