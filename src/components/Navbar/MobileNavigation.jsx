// Importing react
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Paper, BottomNavigationAction, BottomNavigation, useTheme } from "@mui/material";

// MUI Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";

// Importing components
import CartIcon from "../../assets/CartIcon";

// Importing Context
import { CartContext } from "../../context/cartContext";
import { ColorModeContext } from "../../layout/Theme";

/**
 *
 * @returns
 */
const MobileNavigation = () => {
 const theme = useTheme();
 const colorMode = useContext(ColorModeContext);

 const [value, setValue] = useState(0);
 const cart = useContext(CartContext);

 // Adding a new function to the CartContext
 const cartTotal = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 return (
  <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99 }} elevation={5}>
   <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
     setValue(newValue);
    }}
   >
    <BottomNavigationAction component={Link} to="/" icon={<HomeIcon color="secondary" />} />
    <BottomNavigationAction component={Link} to="/cart" value={cartTotal} icon={<CartIcon amount={cartTotal} />} />
    <BottomNavigationAction component={Link} to="/contact" icon={<ContactPhoneIcon color="secondary" />} />
    <BottomNavigationAction onClick={colorMode.toggleColorMode} icon={theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />} />
   </BottomNavigation>
  </Paper>
 );
};

export default MobileNavigation;
