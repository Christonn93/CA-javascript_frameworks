// Importing react
import React from "react";
import { Link } from "react-router-dom";

// Importing mui items
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Adding style
const linkStyle = {
 textDecoration: "none",
 color: "black",
 textTransform: "initial",
};

const P = {
 margin: "0",
 padding: "0",
};

const List = {
 display: "flex",
 justifyContent: "space-between",
};

const SearchListItem = ({ props, option, key }) => {
 return (
  <li {...props} key={option.id} style={List}>
   <p style={P}>{option.label}</p>
   <Link to={`/product/${option.id}`} style={linkStyle}>
    <Button variant="outlined" color="secondary">
     View <ArrowRightIcon fontSize="small" />
    </Button>
   </Link>
  </li>
 );
};

export default SearchListItem;
