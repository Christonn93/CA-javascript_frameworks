import React from "react";

// Importing MUI
import { Button, Tooltip, Badge } from "@mui/material";

// Importing local storage function
import { useLocalStorage } from "../../js/localStorage/useLocalStorage";

/**
 * AddedToCart
 *
 * @param {*} { product }
 * @returns UI if product is Added To Cart
 */
const AddedToCart = ({ product, productAmount, cart }) => {
 const [data = product, setCart = cart.addToCart] = useLocalStorage("Cart", cart);

 return (
  <>
   <Tooltip title="Added to cart">
    <Badge badgeContent={productAmount} color="primary">
     <Button
      color="success"
      onClick={() => {
       setCart(product.id);
       cart.addToCart(product.id);
      }}
      variant="contained"
      value={data}
     >
      Added to cart
     </Button>
    </Badge>
   </Tooltip>
  </>
 );
};

export default AddedToCart;
