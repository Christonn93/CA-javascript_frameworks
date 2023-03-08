// Importing react
import * as React from "react";

// Importing MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ResponsiveGrid = (props) => {
 return (
  <Box sx={{ flexGrow: 1 }} bgcolor={"orange"} p={2}>
   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={2}>
   {Array.from(props.array).map((_) => (
    <Grid item xs={4} sm={4} md={4} key={props.key}>
     {props.content}
    </Grid>
     ))}
   </Grid>
  </Box>
 );
};

export default ResponsiveGrid;
