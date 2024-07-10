import { Flex, Box, SimpleGrid, Container } from "@chakra-ui/react";
import CardProduct from "./CardProduct";
import DrawerFilter from "../DrawerFilter/DrawerFilter";
import InputSearch from "../common/ui/InputSearch";
import ButtonSearchProduct from "../common/ui/ButtonSearchProduct";
import { Suspense } from "react";
import useProductStore from "../../store/useProductStore";
import Loader from "../common/ui/Loader";
import useSearch from "../../hooks/useSearch";
import useFilterProduct from "../../hooks/useFilterProduct";
import { Product } from "../../interfaces/product.interface";

function Ecommerce() {
  const isLoading = useProductStore((state) => state.isLoading);

  const object_useSearch = useSearch();
  const { filteredProducts, haveProducts } = useFilterProduct();

  return (
    <Box px={20}>
      <Flex justify="center" pt={5}>
        <InputSearch object_useSearch={object_useSearch} />
        <DrawerFilter />
        <ButtonSearchProduct object_useSearch={object_useSearch} />
      </Flex>
      <Flex justify="center" p={5}></Flex>

      <Container maxW="container.xl" px={{ base: 4, sm: 6, md: 8 }} py={8}>
        <SimpleGrid minChildWidth="250px" spacing={5}>
          {isLoading && <Loader />}

          {!isLoading && !haveProducts() && (
            <Box>No hay productos encontrados</Box>
          )}

          {!isLoading &&
            haveProducts() &&
            filteredProducts?.map((product: Product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Ecommerce;
