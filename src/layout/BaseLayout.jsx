// Importing React elements
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Importing MUI
import { Box } from "@mui/system";

// Importing components
import Footer from "../components/footer/Footer";
import PageHeader from "../components/header/PageHeader";

const PageLayout = styled.div`
 display: grid;
 grid-template-rows: auto 1fr auto;
 height: 100vh;
`;

const Layout = () => {
 return (
  <PageLayout>
   <PageHeader />
   <Box sx={{
    mt: 2,
    mb: 2
   }}>
    <Outlet />
   </Box>
   <Footer />
  </PageLayout>
 );
};

export default Layout;
