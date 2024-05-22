import { Flex, Box, useColorModeValue, Stack, Input } from "@chakra-ui/react";
import { data } from "./data";
import CardProduct from "./CardProduct";
import Heading from "../common/Heading";
import { KeyboardEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    <Box mt={-19}>
      <Flex justify="center">
        <Heading />
      </Flex>

      <Flex justify="center" p={5}>
        <Input
          value={query}
          onChange={handleChange}
          onKeyUp={handleKeyPress}
          placeholder="Buscar..."
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
          borderWidth="1px"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          rounded="full"
          maxW="lg"
          focusBorderColor="#f48c06"
          _focus={{
            borderColor: "#f48c06",
            boxShadow: "0 0 0 1px #f48c06",
            transform: "scale(1.05)",
          }}
        />
      </Flex>

      <Stack spacing={5} p={5}>
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
      </Stack>
    </Box>
  );
}

export default Ecommerce;
