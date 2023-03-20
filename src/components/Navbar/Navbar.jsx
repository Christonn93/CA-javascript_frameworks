// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing MUI components
import { Toolbar, CssBaseline, Button, Tooltip, IconButton, useMediaQuery, useTheme, Box, Grid, Badge } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Importing components
import CartIcon from "../../assets/CartIcon";
import Logo from "../../assets/images/color-noBG.png";
import DrawerComponent from "./Drawer";

// Importing cart context
import { CartContext } from "../../context/cartContext";

// Styling company logo
const CompanyLogo = styled.img`
 height: 150px;
`;

/**
 * The main navigation for the site
 *
 * @returns page navigation
 */
const Navbar = () => {
 const cart = useContext(CartContext);
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 // Adding a new function to the CartContext
 const cartTotal = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 return (
  <Box width={"100%"}>
   <CssBaseline />
   <Toolbar>
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
     <Grid item>
      <Link to="/">
       <CompanyLogo src={Logo} alt="Logo" loading="lazy" />
      </Link>
     </Grid>
     <Grid item>
      {isMobile ? (
       <DrawerComponent />
      ) : (
       <>
        <Link to="/">
         <Tooltip title="Home">
          <Button variant="text">Home</Button>
         </Tooltip>
        </Link>
        <Link to="/contact">
         <Tooltip title="Contact us">
          <Button variant="text">Contact</Button>
         </Tooltip>
        </Link>

        <Link to="/cart">
         <Tooltip title="Your cart">
          <Badge badgeContent={cartTotal} color="primary">
           <CartIcon />
          </Badge>
         </Tooltip>
        </Link>
        <IconButton sx={{ ml: 1 }} color="inherit">
         {device.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
       </>
      )}
     </Grid>
    </Grid>
   </Toolbar>
  </Box>
 );
};

export default Navbar;
