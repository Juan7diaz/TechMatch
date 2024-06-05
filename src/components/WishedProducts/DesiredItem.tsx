import {
  Flex,
  Box,
  Button,
  Image,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import { ResponseWishedProduct } from "../../interfaces/wishedProduct.interface";
import { handleImageError } from "../../utils/handleImageError";

const DEFAULT_IMAGE_URL =
  "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

function DesiredItem({ item }: { item: ResponseWishedProduct }) {
  const imageWidth = useBreakpointValue({ base: "100%", sm: "300px" });
  const imageHeight = useBreakpointValue({ base: "180px", sm: "180px" });
  return (
    <Flex bg="white" p={4} borderRadius="md" boxShadow="md" alignItems="center" justifyContent="space-between">
      <Image
          src={item.pieza.imagen}
          alt={`Picture of ${item.pieza.nombre}`}
          maxW={imageWidth}
          minW={imageWidth}
          maxH={imageHeight}
          minH={imageHeight}
          objectFit="cover"
          onError={(e) => handleImageError(e, DEFAULT_IMAGE_URL)}
        />
      <Box>
        <Text fontWeight="bold">{item.pieza.nombre}</Text>
        <Text color="gray.700">${item.pieza.precio}</Text>
      </Box>
      <Button colorScheme="red" size="sm">
        Ver Mas
      </Button>
    </Flex>
  );
};
export default DesiredItem