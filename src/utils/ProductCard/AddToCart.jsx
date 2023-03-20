// Importing react
import React from "react";

// Importing MUI
import { Tooltip, Button } from "@mui/material";

// Importing local storage function
import { useLocalStorage } from "../../js/localStorage/useLocalStorage";

/**
 * AddToCart
 *
 * @param {*} { product }
 * @returns UI if product is not added to cart
 */
const AddToCart = ({ product, cart }) => {
 const [data = product, setCart = cart.addToCart] = useLocalStorage("Cart", cart);
 return (
  <>
   <Tooltip title="Add to cart">
    <Button
     color="primary"
     onClick={() => {
      setCart(product.id);
      cart.addToCart(product.id);
     }}
     variant="contained"
     value={data}
    >
     Add to cart
    </Button>
   </Tooltip>
  </>
 );
};

export default AddToCart;
