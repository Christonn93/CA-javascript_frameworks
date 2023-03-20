// Importing react
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

/**
 * NoDiscount
 *
 * @param {*} { product }
 * @returns Default UI if product is not on sale
 */
const NoDiscount = ({ product }) => (
 <>
  <Box>
   <strong>{product.price} NOK</strong>
  </Box>
  <Box>
   <small>
    <i>(Additional tax may apply on checkout)</i>
   </small>
  </Box>
 </>
);

export default NoDiscount;
