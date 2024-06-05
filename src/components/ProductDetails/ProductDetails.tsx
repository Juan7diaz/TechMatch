import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
  HStack,
  Icon,
  Center,
} from "@chakra-ui/react";
import { BsTools, BsHeart, BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { handleImageError } from "../../utils/handleImageError";
import RamDetails from "./types/RamDetails";
import Loader from "../common/ui/Loader";
import { useFetchByType } from "../../hooks/useFetch";
import ErrorPage from "../common/ui/ErrorPage";
import ProcesadorDetails from "./types/ProcesadorDetails";
import {
  Grafica,
  Procesador,
  Ram,
  Placa,
} from "../../interfaces/product.interface";
import GraficaDetails from "./types/GraficaDetails";
import PlacaDetails from "./types/PlacaDetails";
import Rating from "../Reviews/rating";
import Reviews from "../Reviews/Reviews";
import { useMutation } from "react-query";
import { postPiezaDeseada } from "../../services/api";
import useUSerStore from "../../store/useUserStore";
import {  useQuery } from "react-query";
import { getAvgRatingByPiezaId } from "../../services/api";

const DEFAULT_IMAGE_URL =
  "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

const ProductDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  let [searchParams] = useSearchParams();

  const { data, isLoading, isError } = useFetchByType({
    type: searchParams.get("type") || "",
    id: id || "",
  });

  const userId = useUSerStore((state) => state.id);

  const mutation = useMutation({
    mutationFn: () =>
      postPiezaDeseada({
        pieza: {
          id: id || "",
        },
        usuario: {
          id: userId,
        },
      }),
  });


  const { data: dataRaiting, isLoading: isLoadingRaiting} = useQuery({
    queryKey: ["rating", id],
    queryFn: () => getAvgRatingByPiezaId(id || ""),
  });


  if (isLoading) return <Loader />;

  if (isError) return <ErrorPage />;

  return (
    <>
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
            src={data?.pieza.imagen}
            alt="Product Image"
            objectFit="cover"
            onError={(e) => handleImageError(e, DEFAULT_IMAGE_URL)}
            maxH={{ base: 250, sm: 300, md: 350, lg: 400 }}
            minH={{ base: 250, sm: 300, md: 350, lg: 400 }}
            maxW={{ base: 250, sm: 300, md: 350, lg: 400 }}
            minW={{ base: 250, sm: 300, md: 350, lg: 400 }}
          />
          <Center>
            <Text color="gray.500" fontSize="sm" fontStyle={"italic"} pt={8}>
              Incompatible con la lista de construcción
            </Text>
          </Center>
        </Box>

        <Stack spacing={4} flex="1">
          <Heading size="md">{data?.pieza.nombre}</Heading>
          {!isLoadingRaiting && <Rating value={dataRaiting || 0} />}
          {data?.pieza.tipoPieza === "RAM" && <RamDetails ram={data as Ram} />}
          {data?.pieza.tipoPieza === "PROCESADOR" && (
            <ProcesadorDetails procesador={data as Procesador} />
          )}
          {data?.pieza.tipoPieza === "GRAFICA" && (
            <GraficaDetails grafica={data as unknown as Grafica} />
          )}
          {data?.pieza.tipoPieza === "PLACA" && (
            <PlacaDetails placa={data as unknown as Placa} />
          )}

          <HStack spacing={4}>
            <HStack spacing={2} color="blue.500">
              <Icon as={BsTools} />
              <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
                Añadir a lista de construcción de PC
              </Text>
            </HStack>
            <HStack spacing={2} color="red.500">
              <Icon as={BsHeart} />
              <Text
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => mutation.mutate()}
              >
                {mutation.isLoading && "Añadiendo a la lista de deseos..."}
                {mutation.isSuccess && "Añadido a la lista de deseos!!"}
                {mutation.isError && "Error al añadir a la lista de deseos!!"}
                {!mutation.isLoading && !mutation.isSuccess && !mutation.isError && "Añadir a la lista de deseos"}

              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Flex>
      <Reviews piezaId={data?.pieza.id || ""} />
    </>
  );
};

export default ProductDetails;
