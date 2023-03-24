// Importing react
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Paper, BottomNavigationAction, BottomNavigation} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

// Importing components
import CartIcon from "../../assets/CartIcon";

// Importing cartContext
import { CartContext } from "../../context/cartContext";

/**
 *
 * @returns
 */
const MobileNavigation = () => {
 const [value, setValue] = useState(0);
 const cart = useContext(CartContext);

 // Adding a new function to the CartContext
 const cartTotal = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 return (
  <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99 }} elevation={3}>
   <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
     setValue(newValue);
    }}
   >
    <BottomNavigationAction component={Link} to="/" icon={<HomeIcon />} />
    <BottomNavigationAction component={Link} to="/cart" value={cartTotal} icon={<CartIcon amount={cartTotal} />} />
    <BottomNavigationAction component={Link} to="/contact" icon={<ContactPhoneIcon />} />
   </BottomNavigation>
  </Paper>
 );
};

export default MobileNavigation;
