import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Button, Tooltip, IconButton, Drawer, List, ListItem, ListItemText, Badge} from "@mui/material";
import { Menu } from "@mui/icons-material";

import CartIcon from "../../assets/CartIcon";

// Importing cart context
import { CartContext } from "../../context/cartContext";

function DrawerComponent() {
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
     <ListItem onClick={() => setOpenDrawer(false)}>
      <ListItemText>
       <Link to="/cart">
        <Tooltip title="Your cart">
         <Badge badgeContent={cartTotal} color="primary">
          <CartIcon />
         </Badge>
        </Tooltip>
       </Link>
      </ListItemText>
     </ListItem>
    </List>
   </Drawer>
   <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
    <Menu />
   </IconButton>
  </>
 );
}
export default DrawerComponent;
