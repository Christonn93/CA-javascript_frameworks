// Importing react
import React from "react";
import { Link } from "react-router-dom";

import { Stack, Button, Box } from "@mui/material";

import SuccessFeedback from "../../components/Feedback/SuccessFeedback";

const Print = {
 color: "Orange",
 textDecoration: "underline",
 cursor: "pointer",
};

const Checkout = () => {
 return (
  <Box
   sx={{
    flexGrow: 1,
    margin: "12% auto",
   }}
  >
   <SuccessFeedback
    title={<h1>Checkout success</h1>}
    body={
     <Stack spacing={1}>
      <p>Your items is on the way!</p>
      <p>We hope that you will be happy with you order</p>
      <p>
       {" "}
       Download your receipt{" "}
       <span
        style={Print}
        onClick={() => {
         alert("Sorry. There is currently a bug in the system. Contact us for your receipt");
        }}
       >
        {" "}
        HERE{" "}
       </span>
      </p>
     </Stack>
    }
    link={
     <Link to="/">
      <Button variant="contained" color="info">
       Back to home page
      </Button>
     </Link>
    }
    option={null}
    elevation={3}
   />
  </Box>
 );
};

export default Checkout;
