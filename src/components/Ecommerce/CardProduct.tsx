import { Flex, Box, Image, useColorModeValue, Stack, useBreakpointValue, ImageProps } from "@chakra-ui/react";

interface CardProductProps {
  imageURL: string;
  name: string;
  price: number;
}

const DEFAULT_IMAGE_URL = "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

function CardProduct({ imageURL, name, price }: CardProductProps) {
  const cardWidth = useBreakpointValue({ base: "100%", sm: "300px" });
  const imageWidth = useBreakpointValue({ base: "100%", sm: "300px" });
  const imageHeight = useBreakpointValue({ base: "180px", sm: "180px" });

  // Función para manejar el error de carga de la imagen
  const handleImageError: ImageProps["onError"] = (event) => {
    event.currentTarget.src = DEFAULT_IMAGE_URL;
  };

  return (
    <Box
      bg={"white"}
      pb={10}
      maxW={cardWidth}
      minW={cardWidth}
      overflow="hidden"
      _hover={{
        transition: "transform 0.5s ease-in-out",
        cursor: "pointer",
        border: "1px solid",
        borderColor: "gray.200",
      }}
    >
      <Stack direction={"column"}>
        <Image
          src={imageURL}
          alt={`Picture of ${name}`}
          maxW={imageWidth}
          minW={imageWidth}
          maxH={imageHeight}
          minH={imageHeight}
          objectFit="cover"
          onError={handleImageError}
        />
        <Box px={6} pt={2} flex="1">
          <Box fontSize="lg" fontWeight="" mb={4} lineHeight="tight">
            {name}
          </Box>
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                COP{" "}
              </Box>
              {price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
}

export default CardProduct;