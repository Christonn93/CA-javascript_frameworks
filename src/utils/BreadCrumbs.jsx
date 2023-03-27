import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { updateHead } from "../js/headUpdater";

function BasicBreadcrumbs(props) {
 updateHead(props.title, props.description);

 return (
  <Breadcrumbs aria-label="breadcrumb">
   <Link underline="hover" color="inherit" to="/">
    Home
   </Link>
   <Typography color="text.primary">{props.page}</Typography>
  </Breadcrumbs>
 );
}

export default BasicBreadcrumbs;
