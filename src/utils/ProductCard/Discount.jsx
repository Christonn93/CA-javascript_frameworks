// Importing react
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

// Adding style
const red = {
 color: "red",
};

/**
 * Discount
 *
 * @param {*} { product }
 * @returns Discount UI if product is on sale
 */
const Discount = ({ product }) => (
 <>
  <Box>
   <strong>{product.discountedPrice} NOK</strong> <del style={red}>{product.price} NOK</del>
  </Box>
  <Box>
   <small>
    <i>(Additional tax may apply on checkout)</i>
   </small>
  </Box>
 </>
);

export default Discount;
