import { Flex, Box } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Box flex="1">
        <Navbar />
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
