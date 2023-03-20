// Importing react
import React from "react";

// Importing MUI
import { Tooltip, Button } from "@mui/material";

/**
 * AddToCart
 *
 * @param {*} { product }
 * @returns UI if product is not added to cart
 */
const AddToCart = ({ product, cart }) => {
 return (
  <>
   <Tooltip title="Add to cart">
    <Button
     color="primary"
     onClick={() => {
      cart.addToCart(product.id);
     }}
     variant="contained"
    >
     Add to cart
    </Button>
   </Tooltip>
  </>
 );
};

export default AddToCart;
