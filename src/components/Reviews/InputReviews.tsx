import { useState } from "react";
import { Box, Textarea, Button, Input, Grid, Heading } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { postReview } from "../../services/api";
import useUSerStore from "../../store/useUserStore";

const InputReviews = ({ piezaId , refetchReviews }: { piezaId: string, refetchReviews: () => void }) => {


  const userId = useUSerStore((state) => state.id);

  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber < 1 || e.target.valueAsNumber > 5) return;
    setRating(e.target.valueAsNumber);
  };


  const mutation = useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      refetchReviews()
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment || !rating) return;

    setRating((prev) => parseInt(prev.toFixed(1)));
    setComment((prev) => prev.trim());

    const payload = {
      calificacion: rating,
      descripcion: comment,
      usuario: { id: userId },
      pieza: { id: piezaId },
    };

    mutation.mutate(payload);
  };

  return (
    <Box
      as="form"
      mb={4}
      alignItems="center"
      bg="gray.100"
      p={6}
      mx={{ base: 3, lg: 20 }}
      rounded="md"
      onSubmit={handleSubmit}
    >
      <Heading size={"md"} pb={3} color={"gray.700"}>
        Añade tu reseña
      </Heading>
      <Textarea
        bg={"white"}
        placeholder="Escibe tu comentario..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        resize="vertical"
      />
      <Grid templateColumns="1fr auto" alignItems="center" mt={2} columnGap={4}>
        <Input
          type="number"
          placeholder="Deja tu calificación (1-5)"
          min={1}
          max={5}
          step={0.1}
          value={rating}
          onChange={handleRatingChange}
        />
        <Button
          colorScheme="yellow"
          variant={"outline"}
          type="submit"
          width="100%"
          _hover={{ bg: "yellow.600", color: "white" }}
          loadingText="Enviando..."
          isLoading={mutation.isLoading}
        >
          Enviar
        </Button>
      </Grid>
    </Box>
  );
};

export default InputReviews;
