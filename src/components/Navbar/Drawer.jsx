// React
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// MUI
import { Button, Tooltip, IconButton, Drawer, List, ListItem, ListItemText, Badge, Box, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";

// MUI Icons
import CartIcon from "../../assets/CartIcon";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// Importing Color context
import { ColorModeContext } from "../../layout/Theme";

// Importing cart context
import { CartContext } from "../../context/cartContext";

function DrawerComponent() {
 const theme = useTheme();
 const colorMode = useContext(ColorModeContext);
 const [openDrawer, setOpenDrawer] = useState(false);
 const cart = useContext(CartContext);

 // Adding a new function to the CartContext
 const cartTotal = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 return (
  <>
   <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor="right">
    <List>
     <ListItem onClick={() => setOpenDrawer(false)}>
      <ListItemText>
       <Link to="/">
        <Tooltip title="Home">
         <Button>Home</Button>
        </Tooltip>
       </Link>
      </ListItemText>
     </ListItem>
     <ListItem onClick={() => setOpenDrawer(false)}>
      <ListItemText>
       <Link to="/contact">
        <Tooltip title="Contact us">
         <Button>Contact</Button>
        </Tooltip>
       </Link>
      </ListItemText>
     </ListItem>
    </List>
    <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}</IconButton>
   </Drawer>
   <Box
    sx={{
     display: "flex",
     gap: "20px",
    }}
   >
    <Link to="/cart">
     <Tooltip title="Your cart">
      <Badge badgeContent={cartTotal} color="primary">
       <CartIcon />
      </Badge>
     </Tooltip>
    </Link>

    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
     <Menu />
    </IconButton>
   </Box>
  </>
 );
}
export default DrawerComponent;
