import React from "react";

import { Alert, AlertTitle, Container, Box } from "@mui/material";

const SuccessFeedback = (props) => {
 const title = props.title;
 const body = props.body;
 const link = props.link;
 const option = props.option;
 const elevation = props.elevation;

 return (
  <Alert severity="success" elevation={elevation}>
   <AlertTitle>{title}</AlertTitle>
   <Container>
    {body}
    <Box sx={{ mt: 5 }}>{link}</Box>
    {option}
   </Container>
  </Alert>
 );
};

export default SuccessFeedback;
