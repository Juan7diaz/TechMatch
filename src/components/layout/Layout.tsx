import { Flex, Box } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useFetchProduct} from "../../hooks/useFetch";
import useProductStore from "../../store/useProductStore";

const Layout = () => {
  const { data } = useFetchProduct();

  const loadProducts = useProductStore((state) => state.loadProducts);
  const setIsLoading = useProductStore((state) => state.setIsLoading);


  if (data) {
    loadProducts(data);
    setIsLoading(false);
  }

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
