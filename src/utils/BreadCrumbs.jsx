import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function BasicBreadcrumbs(props) {
 return (
  <Breadcrumbs aria-label="breadcrumb">
   <Link underline="hover" color="inherit" to="/">
    Home
   </Link>
   <Typography color="text.primary">{props.name}</Typography>
  </Breadcrumbs>
 );
}

export default BasicBreadcrumbs;
