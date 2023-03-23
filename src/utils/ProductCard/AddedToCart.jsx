import React from "react";

// Importing MUI
import { Button, Tooltip, Badge } from "@mui/material";

/**
 * AddedToCart
 *
 * @param {*} { product }
 * @returns UI if product is Added To Cart
 */
const AddedToCart = ({ product, productAmount, cart }) => {
 return (
  <>
   <Tooltip title="Added to cart">
    <Badge badgeContent={productAmount} color="secondary">
     <Button
      color="success"
      onClick={() => {
       cart.addToCart(product.id);
      }}
      variant="contained"
     >
      Added to cart
     </Button>
    </Badge>
   </Tooltip>
  </>
 );
};

export default AddedToCart;
