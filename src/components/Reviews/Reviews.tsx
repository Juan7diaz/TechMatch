import { Box, Text, Flex, Avatar, IconButton, Badge } from "@chakra-ui/react";
import Rating from "./rating";
import { ResponseReview } from "../../interfaces/review.interface";
import {  useMutation, useQuery } from "react-query";
import useUSerStore from "../../store/useUserStore";
import { deleteReviewById, getReviewsByPiezaId } from "../../services/api";
import { BiTrash } from "react-icons/bi";
import InputReviews from "./InputReviews";

const Reviews = ({ piezaId}: { piezaId: string }) => {

  const isLogged = useUSerStore((state) => state.isLogged);


  const { data, refetch, isLoading } = useQuery({
    queryKey: ["reviews", piezaId],
    queryFn: () => getReviewsByPiezaId(piezaId),
    keepPreviousData: true
  });

  return (
    <>

      {
        (isLogged && !isLoading) &&
        <InputReviews piezaId={piezaId} refetchReviews={refetch} />
      }

      {data &&
        data.map((review) => (
          <ReviewsCard key={review.id} review={review}  refetchReviews={refetch}/>
        ))}
    </>
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
      refetchReviews()
    },
  });

  const handleDetete = (id: string) => mutateDelete.mutate(id);

  return (
    <Flex
      mb={4}
      alignItems="center"
      bg="gray.100"
      p={6}
      mx={{ base: 3, lg: 20 }}
      rounded="md"
    >
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={review.usuario.nombreUsuario} />
            <Box>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Text fontWeight={"bold"}>{review.usuario.nombreUsuario}</Text>
                {userId === review.usuario.id && (
                  <Badge colorScheme="purple">Tu reseña</Badge>
                )}
              </Flex>
              <Rating value={review.calificacion} />
            </Box>
          </Flex>
          {userId === review.usuario.id && (
            <Box>
              <IconButton
                mx={3}
                variant="outline"
                borderColor={"gray.300"}
                aria-label="See menu"
                icon={<BiTrash />}
                isLoading={mutateDelete.isLoading}
                onClick={() => handleDetete(review.id)}
              />
            </Box>
          )}
        </Flex>
        <Text pt={4} color={"gray.600"}>
          {review.descripcion}
        </Text>
      </Box>
    </Flex>
  );
};
