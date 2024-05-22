import { keyframes, useBreakpointValue, Flex, VStack } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const bgAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
  `;

  const location = useLocation();

  const getHeight = () => {
    if (location.pathname === "/") {
      return "calc(100vh - 62px)";
    } else {
      return "100%";
    }
  };

  return (
    <>
      <Navbar />
      <Flex w={"full"} h={getHeight()}>
        <VStack
          w={"full"}
          justify={"flex-start"}
          align={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          pt={useBreakpointValue({ base: 20, md: 24 })}
          animation={`${bgAnimation} 7s ease infinite`}
          bgSize={"200% 200%"}
          bgGradient="linear(45deg, #2c3a47, #495e70, #485e70, #4a606f, #37474f, #33444c)"
        >
          <Outlet />
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
