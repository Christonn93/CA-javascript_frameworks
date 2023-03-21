// Importing react
import React, { useContext } from "react";

import { Grid } from "@mui/material";

// Importing fetch function
import ApiHook from "../../api/ApiHooks";

// Importing cart context
import { CartContext } from "../../context/cartContext";

const calculation = (num1, num2) => {
 return num1 * num2;
};

const ItemListing = ({ id }) => {
 const { data } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(id);
 return (
  <Grid container spacing={3}>
   <Grid item xs={5}>
    <span>{data.title}</span>
   </Grid>
   <Grid item xs={2}>
    <span>{productAmount}</span>
   </Grid>
   <Grid item xs={5}>
    <span>{calculation(data.discountedPrice, productAmount).toFixed(2)} ,-</span>
   </Grid>
  </Grid>
 );
};

export default ItemListing;