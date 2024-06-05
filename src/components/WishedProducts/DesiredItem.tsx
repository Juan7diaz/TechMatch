import {
  Flex,
  Box,
  Image,
  Text,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { ResponseWishedProduct } from "../../interfaces/wishedProduct.interface";
import { handleImageError } from "../../utils/handleImageError";
import { BiTrash } from "react-icons/bi";
import { useMutation } from "react-query";
import { deletePiezaDeseadaById } from "../../services/api";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE_URL =
  "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

function DesiredItem({
  item,
  refetch,
}: {
  item: ResponseWishedProduct;
  refetch: () => void;
}) {
  const imageWidth = useBreakpointValue({ base: "100%", sm: "300px" });
  const imageHeight = useBreakpointValue({ base: "180px", sm: "180px" });

  const mutation = useMutation({
    mutationFn: () => deletePiezaDeseadaById(item.id),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <Flex
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-between"
      mt={5}
    >
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
      <IconButton
        as={Link}
        to={`/product/${item.pieza.id}?type=${item.pieza.tipoPieza}`}
        ml={2}
        aria-label="show more"
        icon={<FaInfo />}
        colorScheme="blue"
        variant="outline"
        isLoading={mutation.isLoading}
      />
      <IconButton
        ml={2}
        aria-label="delete"
        icon={<BiTrash />}
        colorScheme="red"
        variant="outline"
        isLoading={mutation.isLoading}
        onClick={() => mutation.mutate()}
      />
    </Flex>
  );
}
export default DesiredItem;
