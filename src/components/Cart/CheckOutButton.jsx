import React from "react";

import { Box, Button } from "@mui/material";

const CheckOutButton = ({ cart }) => {
 return (
  <Box my={2}>
   <a href="/checkout">
    <Button variant="contained" color="success" onClick={() => cart.clearCart()}>
     Check out
    </Button>
   </a>
  </Box>
 );
};

export default CheckOutButton;
