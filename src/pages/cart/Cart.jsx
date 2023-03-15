// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Container, Grid } from "@mui/material";

// Importing cart context
import { CartContext } from "../../components/cart/cartContext";
import CartProduct from "../../components/cart/CartProduct";

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
     <Grid container spacing={1}>
      {cart.items.map((product, idx) => (
       <CartProduct id={product.id} />
      ))}
     </Grid>
     <h3>Total: {cart.getTotalPrice().toFixed(2)}</h3>
    </Container>
   ) : (
    <Container>
     <h2>Your cart is empty</h2>
    </Container>
   )}

   <Link to="/checkout">checkout</Link>
  </Container>
 );
};

export default Cart;
