// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Stack, Box, Alert } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Importing components
import CartCard from "../../components/card/CartCard";

// Importing cart context
import { CartContext } from "../../context/cartContext";
import CartSummary from "../../components/Cart/CartSummary";

const Cart = () => {
 // Getting the cart context
 const cart = useContext(CartContext);

 // Adding a new function to the CartContext
 const products = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 return (
  <>
   <Box sx={{ flexGrow: 1, margin: "20px auto" }}>
    <Grid container spacing={4} columns={{ xs: 2, md: 12 }} rowSpacing={3}>
     <Grid xs={8}>
      <h2>Your products</h2>
      {products > 0 ? (
       <Stack spacing={2}>
        {cart.items.map((product, idx) => (
         <CartCard id={product.id} key={product.id} />
        ))}
       </Stack>
      ) : (
       <Alert variant="outlined" severity="warning">
        Your cart is empty! <Link to="/">Back to shop</Link>
       </Alert>
      )}
     </Grid>
     <Grid xs={4}>
      <CartSummary id={products.id} cart={cart} />
     </Grid>
    </Grid>
   </Box>
  </>
 );
};

export default Cart;
