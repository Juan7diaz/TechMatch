import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ResponseWishedProduct } from "../../interfaces/wishedProduct.interface";
import { handleImageError } from "../../utils/handleImageError";
import { FaTrashAlt, FaInfoCircle, FaHeart } from "react-icons/fa";
import { useMutation } from "react-query";
import { deletePiezaDeseadaById } from "../../services/api";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/currencyFormatter";

const DEFAULT_IMAGE_URL = "path/to/default/image.jpg";

const MotionBox = motion(Box);

function DesiredItem({
  item,
  refetch,
}: {
  item: ResponseWishedProduct;
  refetch: () => void;
}) {
  const mutation = useMutation({
    mutationFn: () => deletePiezaDeseadaById(item.id),
    onSuccess: () => refetch(),
  });

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const price = currencyFormatter({ currency: "COP", value: item.pieza.precio || 0 });

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        _hover={{ boxShadow: "lg" }}
        transition="all 0.3s"
      >
        <Image
          src={item.pieza.imagen}
          alt={item.pieza.nombre}
          objectFit="cover"
          w="150px"
          h="150px"
          onError={(e) => handleImageError(e, DEFAULT_IMAGE_URL)}
        />
        <Flex flex={1} direction="column" p={4} justifyContent="space-between">
          <VStack align="start" spacing={2}>
            <HStack>
              <Badge colorScheme="purple">{item.pieza.tipoPieza}</Badge>
              <FaHeart color="red" />
            </HStack>
            <Text fontWeight="bold" fontSize="lg" color={textColor}>
              {item.pieza.nombre}
            </Text>
          </VStack>
          <HStack justifyContent="space-between" alignItems="center" mt={2}>
            <Text fontWeight="bold" fontSize="xl" color="#f48c04">
             {price}
            </Text>
            <HStack>
              <Tooltip label="Ver detalles" hasArrow>
                <IconButton
                  as={Link}
                  to={`/product/${item.pieza.id}?type=${item.pieza.tipoPieza}`}
                  icon={<FaInfoCircle />}
                  aria-label="Ver detalles"
                  colorScheme="blue"
                  variant="ghost"
                />
              </Tooltip>
              <Tooltip label="Eliminar de la lista" hasArrow>
                <IconButton
                  icon={<FaTrashAlt />}
                  aria-label="Eliminar"
                  colorScheme="red"
                  variant="ghost"
                  isLoading={mutation.isLoading}
                  onClick={() => mutation.mutate()}
                />
              </Tooltip>
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </MotionBox>
  );
}

export default DesiredItem;
