import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

interface CardProductProps {
  tag: string;
  imageURL: string;
  name: string;
  price: number;
  numReviews: number;
}

function CardProduct({
  imageURL,
  numReviews,
  name,
  tag,
  price,
}: CardProductProps) {
  return (
    <Flex w="full" pb={5} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW={{ base: "full", md: "2xl" }}
        minW={{ base: "full", md: "2xl" }}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        overflow="hidden"
        _hover={{
          shadow: "xl",
          transform: "scale(1.05)",
          transition: "transform 0.5s ease-in-out",
          borderColor: "#f48c06",
          cursor: "pointer",
        }}
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Image
            src={imageURL}
            alt={`Picture of ${name}`}
            maxW={{ base: "full", md: "200px" }}
            minW={{ base: "full", md: "200px" }}
            maxH={{ base: "full", md: "200px" }}
            minH={{ base: "full", md: "200px" }}
            objectFit="cover"
          />
          <Box p={6} flex="1">
            <Box display="flex" alignItems="baseline" mb={2}>
              <Badge
                rounded="full"
                px="2"
                fontSize="0.8em"
                bg="#f48c06"
                color={"white"}
              >
                {tag}
              </Badge>
            </Box>
            <Box fontSize="lg" fontWeight="" mb={4} lineHeight="tight">
              {name}
            </Box>
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  {numReviews} reseña{numReviews > 1 && "s"}
                </Box>
              </Box>
              <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  COP{" "}
                </Box>
                {price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default CardProduct;
