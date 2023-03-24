import React from "react";

import { Box, Button } from "@mui/material";

const CheckOutButton = ({ cart, state }) => {
 return (
  <Box my={2}>
   {state === false ? (
    <Box my={2}>
     <Button variant="contained" color="success" disabled>
      Check out
     </Button>
    </Box>
   ) : (
    <a href="/checkout">
     <Button variant="contained" color="success" onClick={() => cart.clearCart()}>
      Check out
     </Button>
    </a>
   )}
  </Box>
 );
};

export default CheckOutButton;
