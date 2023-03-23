import React from "react";

import { Box, Divider, Stack, Alert, Paper } from "@mui/material";
import CheckOutButton from "./CheckOutButton";
import ItemListing, { itemPrice } from "./ItemListing";

const CartSummary = ({ id, cart }) => {
 const products = cart.items.reduce((sum, product) => sum + product.quantity, 0);
 const productAmount = cart.getProductAmount(id);

 const total = () => {
  return "I give up on this one";
 };

 const vat = 25;

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
      <p>{total()}</p>
     </Stack>
     <Stack direction="row" spacing={1} justifyContent="space-between">
      <p style={SummaryInfoPara}>VAT:</p>
      <p>{vat} %</p>
     </Stack>
     <Stack direction="row" spacing={1} justifyContent="space-between">
      <p style={SummaryInfoPara}>Total cost</p>
      <p>{total * vat}</p>
     </Stack>
    </Box>
    <Divider />
    <CheckOutButton cart={cart} />
   </Box>
  </Paper>
 );
};

export default CartSummary;
