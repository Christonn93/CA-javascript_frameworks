// Importing react
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing MUI components
import { Toolbar, CssBaseline, Button, Tooltip, IconButton, useMediaQuery, useTheme, Box, Grid, Switch, FormControlLabel } from "@mui/material";

// Importing components
import CartIcon from "../../../assets/CartIcon";
import Logo from "../../../images/color-noBG.png";
import DrawerComponent from "./Drawer";

// Styling company logo
const CompanyLogo = styled.img`
 height: clamp(50px, 80px, 150px);
`;

/**
 * The main navigation for the site
 *
 * @returns page navigation
 */
const Navbar = (props) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 return (
  <Box bgcolor={"lightskyblue"} width={"100%"}>
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
          <IconButton color="success">
           <CartIcon />
          </IconButton>
         </Tooltip>
        </Link>
        <FormControlLabel value="bottom" control={<Switch color="primary" size="small" />} label="Light/Dark" labelPlacement="bottom" />
       </>
      )}
     </Grid>
    </Grid>
   </Toolbar>
  </Box>
 );
};

export default Navbar;
