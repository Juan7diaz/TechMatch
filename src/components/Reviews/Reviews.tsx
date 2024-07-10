import {
  Box,
  Text,
  Flex,
  Avatar,
  IconButton,
  Badge,
  Divider,
  VStack,
  Spinner,
  Alert,
  AlertIcon,
  Center,
} from "@chakra-ui/react";
import Rating from "./rating";
import { ResponseReview } from "../../interfaces/review.interface";
import { useMutation, useQuery } from "react-query";
import useUSerStore from "../../store/useUserStore";
import { deleteReviewById, getReviewsByPiezaId } from "../../services/api";
import { BiTrash } from "react-icons/bi";
import InputReviews from "./InputReviews";
import { Link } from "react-router-dom";

const Reviews = ({ piezaId }: { piezaId: string }) => {
  const isLogged = useUSerStore((state) => state.isLogged);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["reviews", piezaId],
    queryFn: () => getReviewsByPiezaId(piezaId),
    keepPreviousData: true,
  });

  return (
    <VStack align="stretch" mx={{ base: 3, lg: 20 }} spacing={6}>
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          Sección de reseñas
        </Text>
        <Divider />
        {!isLogged && !isLoading && (
          <Text
            fontStyle="italic"
            color="gray.500"
            as={Link}
            to="/login"
            _hover={{ cursor: "pointer", color: "blue.300" }}
          >
            Para realizar una reseña debes iniciar sesión
          </Text>
        )}
      </Box>

      {isLogged && !isLoading && (
        <InputReviews piezaId={piezaId} refetchReviews={refetch} />
      )}

      {isLoading && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}

      {isError && (
        <Alert status="error">
          <AlertIcon />
          Hubo un error al cargar las reseñas
        </Alert>
      )}

      {data &&
        data.map((review) => (
          <ReviewsCard
            key={review.id}
            review={review}
            refetchReviews={refetch}
          />
        ))}
    </VStack>
  );
};

export default Reviews;

const ReviewsCard = ({
  review,
  refetchReviews,
}: {
  review: ResponseReview;
  refetchReviews: () => void;
}) => {
  const userId = useUSerStore((state) => state.id);

  const mutateDelete = useMutation({
    mutationFn: deleteReviewById,
    onSuccess: () => {
      refetchReviews();
    },
  });

  const handleDelete = (id: string) => mutateDelete.mutate(id);

  return (
    <Flex
      direction="column"
      bg="gray.50"
      p={6}
      rounded="md"
      shadow="md"
      w="full"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap={4} alignItems="center">
          <Avatar name={review.usuario.nombreUsuario} />
          <Box>
            <Flex alignItems="center">
              <Text fontWeight="bold">{review.usuario.nombreUsuario}</Text>
              {userId === review.usuario.id && (
                <Badge ml={2} colorScheme="purple">
                  Tu reseña
                </Badge>
              )}
            </Flex>
            <Rating value={review.calificacion} />
          </Box>
        </Flex>
        {userId === review.usuario.id && (
          <IconButton
            aria-label="Delete review"
            icon={<BiTrash />}
            colorScheme="red"
            onClick={() => handleDelete(review.id)}
            isLoading={mutateDelete.isLoading}
          />
        )}
      </Flex>
      <Text mt={4} color="gray.600">
        {review.descripcion}
      </Text>
    </Flex>
  );
};
