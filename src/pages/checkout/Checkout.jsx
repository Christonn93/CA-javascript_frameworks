// Importing react
import { Container, Alert, Stack, Button, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
   <Container>
    <Alert variant="filled" severity="success" elevation={12}>
     <Stack spacing={1}>
      <h1>Checkout success</h1>
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
     <Box sx={{ mt: 5 }}>
      <Link to="/">
       <Button variant="contained" color="info">
        Back to home page
       </Button>
      </Link>
     </Box>
    </Alert>
   </Container>
  </Box>
 );
};

export default Checkout;
