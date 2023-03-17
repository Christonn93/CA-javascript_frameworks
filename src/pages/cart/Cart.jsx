// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Container, Stack } from "@mui/material";

// Importing components
import CartCard from "../../components/card/CartCard";

// Importing cart context
import { CartContext } from "../../context/cartContext";

const Cart = () => {
 // Getting the cart context
 const cart = useContext(CartContext);

 // Adding a new function to the CartContext
 const products = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 return (
  <Container>
   <h1>Cart</h1>
   {products > 0 ? (
    <Container>
     <h2>Your products</h2>
     <Stack spacing={2}>
      {cart.items.map((product, idx) => (
       <CartCard id={product.id} />
      ))}
     </Stack>
     <h3>
      Total:{" "}
      {cart.items.map((product) => {
       return cart.getTotalPrice(product.id).toFixed(1);
      })}
     </h3>
    </Container>
   ) : (
    <Container>
     <h2>Your cart is empty</h2>
     <Link to="/">Browse our products here</Link>
    </Container>
   )}
  </Container>
 );
};

export default Cart;
