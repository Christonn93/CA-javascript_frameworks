// Importing React elements
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Importing MUI
import { Container, useTheme, useMediaQuery } from "@mui/material";

// Importing components
import Footer from "../components/footer/Footer";
import PageHeader from "../components/header/PageHeader";
import MobileNavigation from "../components/Navbar/MobileNavigation";

const PageLayout = styled.div`
 display: grid;
 grid-template-rows: auto 1fr auto;
 height: 100vh;
`;

const Layout = () => {
    const device = useTheme();
    const isMobile = useMediaQuery(device.breakpoints.down("md"));

 return (
  <PageLayout>
   <PageHeader />
   <Container sx={{
    mt: 2,
    mb: 2
   }}>
    <Outlet />
   </Container>
   <Footer />
   {isMobile 
   ? <MobileNavigation />
   : <></>
   }
  </PageLayout>
 );
};

export default Layout;
