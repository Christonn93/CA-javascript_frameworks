// Importing react
import React, { useContext } from "react";

// Importing mui items
import { Button, Grid } from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Importing fetch function
import ApiHook from "../../hooks/ApiHooks";

// Importing cart context
import { CartContext } from "./cartContext";

const CartProduct = ({ id }) => {
 const { data } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(id);
 return (
  <>
   <Grid item xs={3}>
    <span>{data.title}</span>
   </Grid>
   <Grid item xs={3}>
    {data.price === data.discountedPrice ? (
     <>
      <span>{data.price}</span>
      <span></span>
     </>
    ) : (
     <>
      <span>{data.discountedPrice}</span>
      <span>
       <del>{data.price}</del>
      </span>
     </>
    )}
   </Grid>
   <Grid item xs={3}>
    <span>{productAmount}</span>
   </Grid>
   <Grid item xs={3}>
    <Button variant="contained" color="success" onClick={() => cart.addToCart(data.id)}>
     <AddIcon />
    </Button>
    <Button variant="contained" color="warning" onClick={() => cart.removeFromCart(data.id)}>
     <RemoveIcon />
    </Button>
    <Button variant="contained" color="error" onClick={() => cart.deleteFromCart(data.id)}>
     <DeleteForeverIcon />
    </Button>
   </Grid>
  </>
 );
};

export default CartProduct;
