import React from "react";

import { Box, Divider, Stack, Alert, Paper } from "@mui/material";
import CheckOutButton from "./CheckOutButton";
import ItemListing from "./ItemListing";

const CartSummary = ({ id, cart }) => {
 const products = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 const total = () => {
  return cart.getTotalPrice().toFixed(2);
 };

 /**
  * Found this function online.
  * It calculates the tax rate on the products
  *
  * @Creator https://makersaid.com/how-to-calculate-tax-with-javascript/
  *
  * @returns
  */
 const cartTotal = () => {
  // Set cart value (in our case, $49.99)
  let cartValue = cart.getTotalPrice();
  // Set tax rate (in our case, 7%)
  let taxRate = 25;

  // Calculate final price
  let finalPrice = cartValue * (1 + taxRate / 100);
  let roundedFinalPrice = +finalPrice.toFixed(2);
  return roundedFinalPrice;
 };

 const taxRate = 0.25;

 const SummaryInfoPara = {
  margin: 0,
  padding: 0,
  marginTop: "2px",
 };

 return (
  <Paper>
   <Box
    sx={{
     padding: "10px",
    }}
   >
    <h2>Order summary</h2>
    {products > 0 ? (
     <Stack
      sx={{
       marginTop: 2,
       marginBottom: 2,
      }}
     >
      {cart.items.map((product, idx) => {
       return <ItemListing id={product.id} key={product.id} />;
      })}
     </Stack>
    ) : (
     <Alert variant="outlined" severity="warning">
      No items in the cart
     </Alert>
    )}
    <Divider />
    <Box
     sx={{
      marginTop: 2,
      marginBottom: 2,
     }}
    >
     <Stack direction="row" spacing={1} justifyContent="space-between">
      <p style={SummaryInfoPara}>Product cost: </p>
      <p>{total()} ,-</p>
     </Stack>
     <Stack direction="row" spacing={1} justifyContent="space-between">
      <p style={SummaryInfoPara}>VAT:</p>
      <p>{taxRate} %</p>
     </Stack>
     <Stack direction="row" spacing={1} justifyContent="space-between">
      <p style={SummaryInfoPara}>Total cost</p>
      <p>{cartTotal()} ,-</p>
     </Stack>
    </Box>
    <Divider />
    <CheckOutButton cart={cart} />
   </Box>
  </Paper>
 );
};

export default CartSummary;
