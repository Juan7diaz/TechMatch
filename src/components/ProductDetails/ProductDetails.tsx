import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
  HStack,
  Button,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { BsHeart, BsArrowLeft, BsInfoCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { handleImageError } from "../../utils/handleImageError";
import ErrorPage from "../common/ui/ErrorPage";
import Loader from "../common/ui/Loader";
import Reviews from "../Reviews/Reviews";
import Rating from "../Reviews/rating";
import { getComponentByType } from "../../utils/getComponentByType";
import useProductDetails from "../../hooks/useProductDetails";

const DEFAULT_IMAGE_URL =
  "https://via.placeholder.com/400x400.png?text=No+Image";

const ProductDetails = () => {
  const navigate = useNavigate();

  const { wishedList, product, rating, user } = useProductDetails();

  if (product.isLoading) return <Loader />;

  if (product.isError) return <ErrorPage />;

  return (
    <Box maxWidth="1200px" margin="auto" p={6}>
      <Button leftIcon={<BsArrowLeft />} onClick={() => navigate(-1)} mb={6}>
        Regresar
      </Button>

      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        <Box flex={1}>
          <Image
            src={product?.data?.pieza.imagen}
            alt={product?.data?.pieza.nombre}
            fallbackSrc={DEFAULT_IMAGE_URL}
            onError={(e) => handleImageError(e, DEFAULT_IMAGE_URL)}
            objectFit="cover"
            width="100%"
            height="400px"
            borderRadius="lg"
          />
        </Box>

        <Box flex={1}>
          <Stack spacing={4}>
            <Heading size="xl">{product?.data?.pieza.nombre}</Heading>
            <HStack>
              {!rating.isLoadingRaiting && (
                <Rating value={rating.dataRaiting || 0} />
              )}
            </HStack>
            <Text fontSize="3xl" fontWeight="bold" color="#f48c04">
              ${product?.data?.pieza.precio.toFixed(2)}
            </Text>
            <Text color={"black"}>{product?.data?.pieza.modelo}</Text>
            <HStack>
              {user.id && (
                <Button
                  leftIcon={<BsHeart />}
                  onClick={wishedList.add}
                  variant="outline"
                  colorScheme="red"
                  size="lg"
                  isDisabled={wishedList.isLoading || wishedList.isSuccess}
                >
                  {wishedList.isLoading && "Añadiendo a la lista de deseos..."}
                  {wishedList.isSuccess && "Añadido a la lista de deseos!!"}
                  {wishedList.isError &&
                    "Error al añadir a la lista de deseos!!"}
                  {!wishedList.isLoading &&
                    !wishedList.isSuccess &&
                    !wishedList.isError &&
                    "Añadir a la lista de deseos"}
                </Button>
              )}
              {!user.id && (
                <Button
                  leftIcon={<BsInfoCircle />}
                  onClick={() => navigate("/login")}
                  variant="outline"
                  colorScheme="blue"
                  size="lg"
                >
                  Inicia sesión para añadir a la lista de deseos
                </Button>
              )}
            </HStack>
          </Stack>
        </Box>
      </Flex>

      <Tabs mt={12}>
        <TabList>
          <Tab>Especificaciones</Tab>
          <Tab>Reseñas</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {getComponentByType({
              data: product?.data!,
              type: product?.data?.pieza.tipoPieza,
            })}
          </TabPanel>
          <TabPanel>
            <Reviews piezaId={product?.data?.pieza.id || ""} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProductDetails;
