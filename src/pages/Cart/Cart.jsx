// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Stack, Box, Alert, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Importing components
import CartCard from "../../components/Card/CartCard";
import BasicBreadcrumbs from "../../utils/BreadCrumbs";

// Importing cart context
import { CartContext } from "../../context/cartContext";
import CartSummary from "../../components/Cart/CartSummary";

// Setting some style
const StyledLinkWhite = {
 color: "white",
 textAlign: "start",
};

const StyledLinkBlack = {
 color: "black",
 textAlign: "start",
};

const Cart = () => {
 // Getting the cart context
 const cart = useContext(CartContext);
 const theme = useTheme();

 // Adding a new function to the CartContext
 const products = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 return (
  <>
  <BasicBreadcrumbs title="Cart" page="Cart" description="Store online Cart summary"/>
   <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
    <Grid container spacing={5}>
     <Grid item xs={12}>
      <h1>Your cart</h1>
     </Grid>
     <Grid item xs={8}>
      {products > 0 ? (
       <Stack spacing={2}>
        {cart.items.map((product, idx) => {
         return <CartCard id={product.id} key={product.id} />;
        })}
       </Stack>
      ) : (
       <Alert variant="outlined" severity="warning">
        Your cart is empty!{" "}
        {theme.palette.mode === "dark" ? (
         <Link to="/" style={StyledLinkWhite}>
          Back to shop
         </Link>
        ) : (
         <Link to="/" style={StyledLinkBlack}>
          Back to shop
         </Link>
        )}
       </Alert>
      )}
     </Grid>
     <Grid item xs={4}>
      <CartSummary id={products.id} cart={cart} />
     </Grid>
    </Grid>
   </Box>
  </>
 );
};

export default Cart;
