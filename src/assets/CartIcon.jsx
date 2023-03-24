import * as React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = (props) => {
 return (
  <IconButton aria-label="cart">
   <Badge badgeContent={props.amount} color="secondary">
    <ShoppingCartIcon color="secondary" />
   </Badge>
  </IconButton>
 );
};

export default CartIcon;
