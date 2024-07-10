import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Product } from "../../interfaces/product.interface";
import { handleImageError } from "../../utils/handleImageError";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE_URL = "path/to/default/image.jpg";

function CardProduct({ product }: { product: Product }) {
  const cardWidth = useBreakpointValue({ base: "100%", sm: "240px" });

  return (
    <Box
      as={Link}
      to={`/product/${product.id}?type=${product.tipoPieza}`}
      width={cardWidth}
      bg="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      height="420px" // Fixed height for all cards
    >
      <Flex bg="gray.100" justify="center" align="center" flex="1" p={4}>
        <Image
          src={product.imagen}
          alt={product.nombre}
          objectFit="contain"
          maxH="200px"
          onError={(e) => handleImageError(e, DEFAULT_IMAGE_URL)}
        />
      </Flex>
      <VStack spacing={2} p={4} align="stretch" flex="1">
        <Text fontSize="sm" color="gray.500" noOfLines={1}>
          {product.tipoPieza}
        </Text>
        <Text fontSize="md" fontWeight="bold" noOfLines={2}>
          {product.nombre}
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="orange.500">
          ${product.precio.toFixed(2)}
        </Text>
      </VStack>
      <Button
        bg="linear-gradient(90deg, #f48c04, #ffc300)"
        _hover={{ opacity: 0.8 }}
        width="100%"
        borderRadius="0"
      >
        Ver Especificaciónes
      </Button>
    </Box>
  );
}

export default CardProduct;