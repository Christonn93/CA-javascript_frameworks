import React from "react";

import { Box, Divider, Stack, Alert } from "@mui/material";
import CheckOutButton from "./CheckOutButton";
import ItemListing from "./ItemListing";

const CartSummary = ({ id, cart }) => {
 const products = cart.items.reduce((sum, product) => sum + product.quantity, 0);
 cart.getTotalPrice(products)
 return (
  <Box>
   <h2>Order summary</h2>
   {products > 0 ? (
    <Stack>
     {cart.items.map((product, idx) => (
      <ItemListing id={product.id} key={product.id} />
     ))}
    </Stack>
   ) : (
    <Alert variant="outlined" severity="warning">
     No items in the cart
    </Alert>
   )}
   <p>Product cost:</p>
   <p>VAT:</p>
   <p>Total cost: </p>
   <Divider />
   <CheckOutButton cart={cart} />
  </Box>
 );
};

export default CartSummary;
