// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing Color context
import { ColorModeContext } from "../../layout/Theme";

// Importing MUI components
import { Toolbar, CssBaseline, Button, Tooltip, IconButton, useMediaQuery, useTheme, Box, Grid, Badge, Stack } from "@mui/material";

// MUI Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// Importing components
import CartIcon from "../../assets/CartIcon";
import Logo from "../../assets/images/color-noBG.png";
import LogoDark from "../../assets/images/white-noBG.png";
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
 const theme = useTheme();
 const colorMode = useContext(ColorModeContext);
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
      <Link to="/">{theme.palette.mode === "dark" ? <CompanyLogo src={LogoDark} alt="Logo" loading="lazy" /> : <CompanyLogo src={Logo} alt="Logo" loading="lazy" />}</Link>
     </Grid>
     <Grid item>
      {isMobile ? (
       <></>
      ) : (
       <>
        <Stack direction={"row"} spacing={3}>
         <Link to="/">
          <Tooltip title="Home">
           <Button variant="text" color="navText">
            Home
           </Button>
          </Tooltip>
         </Link>
         <Link to="/contact">
          <Tooltip title="Contact us">
           <Button variant="text" color="navText">
            Contact
           </Button>
          </Tooltip>
         </Link>

         <Link to="/cart">
          <Tooltip title="Your cart">
           <Badge badgeContent={cartTotal} color="secondary">
            <CartIcon />
           </Badge>
          </Tooltip>
         </Link>
         <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}</IconButton>
        </Stack>
       </>
      )}
     </Grid>
    </Grid>
   </Toolbar>
  </Box>
 );
};

export default Navbar;
