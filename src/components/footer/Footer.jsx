// Importing react
import React from "react";

// Importing MUI
import { Box, Container } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/color-noBG.png";
import { Stack } from "@mui/system";

// Adding some style
const Inline = {
 display: "flex",
 justifyContent: "center",
};

const LogoStyle = {
 height: "150px",
};

const StyledLink = {
    color: "black",
    textAlign: "start"
}

const Footer = () => {
 const date = new Date();
 const year = date.getFullYear();

 return (
  <Box width={"100%"}>
   <Container
    align="center"
    sx={{
     display: "flex",
     gap: "15px",
     padding: "15px",
     justifyContent: "space-between",
     alignItems: "center"
    }}
   >
    <div>
     <Link to="/">
      <img src={Logo} alt="Logo" style={LogoStyle} loading="lazy" />
     </Link>
    </div>
    <div>
     <p style={Inline}>
      <CopyrightIcon /> Store Online, {year}
     </p>
    </div>
    <Stack spacing={2}>
     <Link to={"/contact"} style={StyledLink}>Contact</Link>
     <Link to={"/privacy"} style={StyledLink}>Privacy Policy</Link>
    </Stack>
   </Container>
  </Box>
 );
};

export default Footer;
