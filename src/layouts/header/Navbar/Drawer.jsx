import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Tooltip, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu } from "@mui/icons-material";

import CartIcon from "../../../assets/CartIcon";

function DrawerComponent() {
 const [openDrawer, setOpenDrawer] = useState(false);
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
         <IconButton color="success">
          <CartIcon />
         </IconButton>
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
