// Importing React elements
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Importing MUI
import { Container } from "@mui/system";

// Importing components
import Footer from "./footer/Footer";
import PageHeader from "./header/PageHeader";

const PageLayout = styled.div`
 display: grid;
 grid-template-rows: auto 1fr auto;
 height: 100vh;
`;

const Layout = () => {
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
  </PageLayout>
 );
};

export default Layout;
