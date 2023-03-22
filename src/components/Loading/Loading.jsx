import React from "react";

// Importing mui items
import { Box } from "@mui/material";

import "./Loading.css"

const Loading = () => {
 return (
  <Box boxShadow="outline" p="6" rounded="md" bg="white" margin={5}>
   <Box className="loading-box">
    <Box className="loader">
     <Box className="loader-wheel"></Box>
     <Box className="loader-text"></Box>
    </Box>
   </Box>
  </Box>
 );
};

export default Loading;