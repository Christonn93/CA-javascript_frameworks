// Importing react
import React from "react";

// Importing MUI
import { Box, Container } from "@mui/system";
import { Button, TextField } from "@mui/material";

const Contact = () => {
 return (
  <Container align="center">
   <h1>Contact us</h1>
   <Box
    component="form"
    maxWidth={"auto"}
    sx={{
     "& .MuiTextField-root": { m: 1 },
    }}
    noValidate
    autoComplete="off"
   >
    <TextField fullWidth required id="outlined-required" label="First name" />
    <TextField fullWidth required id="outlined-required" label="Last name" />
    <TextField fullWidth required id="outlined-required" label="Subject" />
    <TextField fullWidth id="outlined-multiline-static" label="Message" multiline rows={4} />
    <Button variant="contained">Send</Button>
   </Box>
  </Container>
 );
};

export default Contact;
