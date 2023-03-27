// Importing react
import React, { useContext } from "react";

import { Stack, Divider, Grid } from "@mui/material";

// Importing fetch function
import ApiHook from "../../api/ApiHooks";

// Importing cart context
import { CartContext } from "../../context/cartContext";

const calculation = (num1, num2) => {
 return num1 * num2;
};

export const itemPrice = (data, productAmount) => {
 return calculation(data.discountedPrice, productAmount).toFixed(2);
};

const ItemListing = ({ id }) => {
 const { data } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(id);

 const price = itemPrice(data, productAmount);

 return (
  <>
   <Grid container spacing={4} justifyContent="space-between">
    <Grid item xs={5}>
     {data.title}
    </Grid>
    <Grid item xs={3} textAlign="center">
     {productAmount}
    </Grid>
    <Grid item xs={4} textAlign="end">
     {price} ,-
    </Grid>
   </Grid>
  </>
 );
};

export default ItemListing;
