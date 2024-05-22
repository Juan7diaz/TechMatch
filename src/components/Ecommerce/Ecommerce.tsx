import {
  Flex,
  Box,
  useColorModeValue,
  Input,
  Button,
  IconButton,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { data } from "./data";
import CardProduct from "./CardProduct";
import { KeyboardEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter } from "../common/icons/Filter";

function Ecommerce() {
  let [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (searchParams.has("search")) {
      setQuery(searchParams.get("search") || "");
    }
  }, [searchParams]);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchParams({ search: query });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Box px={20}>
      <Flex justify="center" pt={5}>
        <Input
          value={query}
          onChange={handleChange}
          onKeyUp={handleKeyPress}
          placeholder="Buscar..."
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
          borderColor={"black"}
          maxW="lg"
          borderRadius={0}
          borderTopColor={"white"}
          borderRightColor={"white"}
          borderStartColor={"white"}
          _hover={{
            borderTopColor: "white",
            borderRightColor: "white",
            borderStartColor: "white",
          }}
        />
        <IconButton
          colorScheme="transparent"
          border={"1px"}
          color={"black"}
          aria-label="Search database"
          borderRadius={0}
          icon={<Filter />}
        />
        <Button
          borderRadius={100}
          ml={5}
          bg={"blue.400"}
          color={"white"}
          onClick={() => setSearchParams({ search: query })}
        >
          Buscar Pieza
        </Button>
      </Flex>
      <Flex justify="center" p={5}>
        <Button
          borderRadius={100}
          bg={"blue.400"}
          color={"white"}
          onClick={() => setSearchParams({})}
        >
          Añadir pieza
        </Button>
      </Flex>

      <Container maxW="container.xl" px={{ base: 4, sm: 6, md: 8 }} py={8}>
        <SimpleGrid minChildWidth="300px" spacing={5}>
          {data.map((product, i) => (
            <CardProduct
              key={i}
              tag={product.tag}
              imageURL={product.imageURL}
              name={product.name}
              price={product.price}
              numReviews={product.numReviews}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Ecommerce;
