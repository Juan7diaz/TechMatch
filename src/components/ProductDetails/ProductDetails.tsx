import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsTools, BsHeart, BsEye, BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Product } from "../../interfaces/product";
import { handleImageError } from "../../utils/handleImageError";


const DEFAULT_IMAGE_URL = "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"

const ProductDetails = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const { data } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await fetch(`https://tecmatch.azurewebsites.net/api/v1/piezas/${id}`);
      return response.json();
    },
  });

  return (
    <Flex
      flexDirection={{ base: "column", lg: "row" }}
      alignItems="center"
      bg="gray.100"
      p={6}
      m={{ base: 3, lg: 6 }}
      rounded="md"
    >
      <Box mr={{ base: 0, md: 8 }} mb={{ base: 4, md: 0 }}>
        <Box mb={5}>
          <HStack onClick={() => navigate(-1)}>
            <Icon as={BsArrowReturnLeft} />
            <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Regresar
            </Text>
          </HStack>
        </Box>
        <Image
          rounded="md"
          src={data?.imagen}
          alt="Product Image"
          objectFit="cover"
          onError={(e) =>  handleImageError(e, DEFAULT_IMAGE_URL)}
          maxH={{ base: 250, sm: 300, md: 350, lg: 400 }}
          minH={{ base: 250, sm: 300, md: 350, lg: 400 }}
          maxW={{ base: 250, sm: 300, md: 350, lg: 400 }}
          minW={{ base: 250, sm: 300, md: 350, lg: 400 }}
        />
        <HStack spacing={4}>
          <Text color="gray.500" fontSize="sm" fontStyle={"italic"}>
            Incompatible con la lista de construcción
          </Text>
          <HStack spacing={2} color="blue.500">
            <Icon as={BsEye} />
            <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Ver más...
            </Text>
          </HStack>
        </HStack>
      </Box>

      <Stack spacing={4} flex="1">
        <Heading size="md">
          {data?.nombre}
        </Heading>
        <Flex alignItems="center">
          <HStack spacing={1}>
            <Icon as={FaStar} color="yellow.400" />
            <Icon as={FaStar} color="yellow.400" />
            <Icon as={FaStar} color="yellow.400" />
            <Icon as={FaStar} color="yellow.400" />
            <Icon as={FaStarHalfAlt} color="yellow.400" />
          </HStack>
          <Text ml={2}>4.0</Text>
        </Flex>
        <Stack spacing={2}>
          <Text fontWeight="bold" fontSize="xl">
            Precio: $ {data?.precio.toFixed(2)}
          </Text>
          <Text>Capacidad: no aplica</Text>
          <Text>Voltaje: {data?.voltaje}</Text>
          <Text>Socket: {data?.socket.nombre} - {data?.socket.tipoSocket.nombre} </Text>
          <Text>Velocidad: no aplica</Text>
          <Text>ECC: no aplica</Text>
          <Text>Latencia: no aplica</Text>
        </Stack>
        <HStack spacing={4}>
          <HStack spacing={2} color="blue.500">
            <Icon as={BsTools} />
            <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Añadir a lista de construcción de PC
            </Text>
          </HStack>
          <HStack spacing={2} color="red.500">
            <Icon as={BsHeart} />
            <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Añadir a la lista de deseados
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default ProductDetails;
