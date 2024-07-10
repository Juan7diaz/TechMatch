import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, yellow.400, yellow.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página no encontrada
      </Text>
      <Text color={'gray.500'} mb={6}>
        Lo sentimos, la página que estás buscando no se pudo encontrar.
      </Text>

      <Button
        as={Link}
        to={'/ecommerce'}
        colorScheme="teal"
        bgGradient="linear(to-r, yellow.400, yellow.500, yellow.600)"
        color="white"
        variant="solid"
        _hover={{ opacity: 0.8 }}
      >
        Ir al inicio
      </Button>
    </Box>
  );
};

export default ErrorPage;