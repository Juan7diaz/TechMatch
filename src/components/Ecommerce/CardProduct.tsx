import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Stack,
  useBreakpointValue,
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
  const cardWidth = useBreakpointValue({ base: "100%", sm: "300px" });
  const imageWidth = useBreakpointValue({ base: "100%", sm: "300px" });
  const imageHeight = useBreakpointValue({ base: "180px", sm: "180px" });

  return (
    <Box
      bg={"white"}
      pb={10}
      maxW={cardWidth}
      minW={cardWidth}
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.5s ease-in-out",
        cursor: "pointer",
      }}
    >
      <Stack direction={"column"}>
        <Image
          src={imageURL}
          alt={`Picture of ${name}`}
          maxW={imageWidth}
          minW={imageWidth}
          maxH={imageHeight}
          minH={imageHeight}
          objectFit="cover"
        />
        <Box px={6} pt={2} flex="1">
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
  );
}

export default CardProduct;
