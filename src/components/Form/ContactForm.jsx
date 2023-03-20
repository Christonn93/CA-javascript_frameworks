// Importing react
import React from "react";

// Importing MUI
import { Button, TextField, Box, Container } from "@mui/material";

const ContactForm = () => {
 const validInput = false;

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
    {validInput ? (
     <TextField fullWidth required id="outlined-required" label="Full Name" helperText="Please enter your name" name="text" />
    ) : (
     <TextField fullWidth required id="outlined-error" label="Full Name" error helperText="Minimum number of characters is 3, required" />
    )}

    {validInput ? (
     <TextField fullWidth required id="outlined-required" label="Email" helperText="Please enter your Email" name="email" />
    ) : (
     <TextField fullWidth required id="outlined-required" label="Email" error helperText="Must be a valid email address, required" />
    )}

    {validInput ? (
     <TextField fullWidth required id="outlined-required" label="Subject" helperText="Please enter a subject" name="text" />
    ) : (
     <TextField fullWidth required id="outlined-error" label="Subject" error helperText="Minimum number of characters is 3, required" />
    )}

    {validInput ? (
     <TextField fullWidth id="outlined-multiline-static" label="Message" multiline rows={4} helperText="Please enter your message" />
    ) : (
     <TextField fullWidth id="outlined-error" label="Message" multiline rows={4} error helperText="Incorrect entry." />
    )}

    <Button variant="contained">Send</Button>
   </Box>
  </Container>
 );
};

export default ContactForm;
