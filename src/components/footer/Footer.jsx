// Importing react
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing MUI
import { Box, Container, Grid, Stack, useTheme } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

// Importing Company Logo
import Logo from "../../assets/images/color-noBG.png";
import LogoDark from "../../assets/images/white-noBG.png";

// Adding some style
const Inline = {
 display: "flex",
 justifyContent: "center",
};

// Styling company logo
const CompanyLogo = styled.img`
 height: 150px;
`;

const StyledLink = {
 color: "black",
 textAlign: "start",
};

/**
 *
 * @returns
 */
const Footer = () => {
 const theme = useTheme();
 const date = new Date();
 const year = date.getFullYear();

 return (
  <Box width={"100%"}>
   <Container>
    <Grid container spacing={2} columns={{ xs: 2, md: 12 }} rowSpacing={3} alignItems="center">
     <Grid item xs alignItems="center" align="center" order={{ xs: 1, md: 1, lg: 1 }}>
      <Link to="/">{theme.palette.mode === "dark" ? <CompanyLogo src={LogoDark} alt="Logo" loading="lazy" /> : <CompanyLogo src={Logo} alt="Logo" loading="lazy" />}</Link>
     </Grid>
     <Grid item xs={6} alignItems="center" align="center" order={{ xs: 3, md: 3, lg: 2 }}>
      <p style={Inline}>
       <CopyrightIcon /> Store Online, {year}
      </p>
     </Grid>
     <Grid item xs alignItems="center" align="center" order={{ xs: 2, md: 2, lg: 3 }}>
      <Stack spacing={2} alignItems="center">
       <Link to={"/contact"} style={StyledLink}>
        Contact
       </Link>
       <Link to={"/privacy"} style={StyledLink}>
        Privacy Policy
       </Link>
      </Stack>
     </Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default Footer;
