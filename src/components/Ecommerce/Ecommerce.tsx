import { Flex, Box, SimpleGrid, Container } from "@chakra-ui/react";
import CardProduct from "./CardProduct";
import DrawerFilter from "../DrawerFilter/DrawerFilter";
import InputSearch from "../common/ui/InputSearch";
import ButtonSearchProduct from "../common/ui/ButtonSearchProduct";
import useSearch from "../../hooks/useSearch";
import useFetchProduct from "../../hooks/useFetchProduct";
import { Suspense } from "react";

function Ecommerce() {
  const { handleChange, handleKeyPress, query, setSearchParams, searchParams } =
    useSearch();

  const { data } = useFetchProduct(query, searchParams);

  return (
    <Box px={20}>
      <Flex justify="center" pt={5}>
        <InputSearch
          handleKeyPress={handleKeyPress}
          handleChange={handleChange}
          query={query}
        />
        <DrawerFilter />
        <ButtonSearchProduct setSearchParams={setSearchParams} query={query} />
      </Flex>
      <Flex justify="center" p={5}></Flex>

      <Suspense fallback={<div>Loading...</div>}>
        <Container maxW="container.xl" px={{ base: 4, sm: 6, md: 8 }} py={8}>
          <SimpleGrid minChildWidth="300px" spacing={5}>
            {data?.length ? (
              data.map((product, i) => (
                <CardProduct
                  key={i}
                  imageURL={product.imagen}
                  name={product.nombre}
                  price={product.precio}
                />
              ))
            ) : (
              <Box>No hay productos</Box>
            )}
          </SimpleGrid>
        </Container>
      </Suspense>
    </Box>
  );
}

export default Ecommerce;
