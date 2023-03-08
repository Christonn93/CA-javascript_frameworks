// Importing react
import React from "react";
import styled from "styled-components";

// Importing mui items
import { Chip, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Discount from "./Discount";

const Small = styled.p`
 margin: 0;
 padding: 0;
 font-size: small;
`;

const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
`;

const PriceDisplay = (data) => {
 const PriceOff = Discount(data);

 // Display if there is a discount price
 const discountProduct = (
  <Container>
   <Box>
    <span>
     <Chip label={PriceOff + "% off"} color="success" size="small" variant="outlined"></Chip>
    </span>
   </Box>
   <Box>
    {data.discountedPrice}
    <AttachMoneyIcon fontSize="20px" />
    <del>
     {data.price}
     <AttachMoneyIcon fontSize="20px" />
    </del>
   </Box>
   <Box>
    <Small>
     <i>(Additional tax may apply on checkout)</i>
    </Small>
   </Box>
  </Container>
 );

 // Display if there is not discount price
 const noDiscountProduct = (
  <Container>
   <Box>
    {data.price}
    <AttachMoneyIcon fontSize="20px" />
   </Box>
   <Small>
    <i>(Additional tax may apply on checkout)</i>
   </Small>
  </Container>
 );

 let priceDisplay;

 // Conditional rendering
 if (data.discountedPrice >= data.price) {
  priceDisplay = noDiscountProduct;
 } else {
  priceDisplay = discountProduct;
 }

 return priceDisplay;
};

export default PriceDisplay;
