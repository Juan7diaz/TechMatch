import { Text, Stack, Box, Heading, Divider } from '@chakra-ui/react';
import { Procesador } from '../../../interfaces/product.interface';

const ProcesadorDetails = ({ procesador }: { procesador: Procesador }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" shadow="md" bg="white">
      <Heading size="md" mb={4}>
        Detalles del Procesador
      </Heading>
      <Divider mb={4} />
      <Stack spacing={2}>
        <Text>
          <Text as="span" fontWeight="semibold">Voltaje:</Text> {procesador?.pieza.voltaje}W
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Socket:</Text> {procesador?.pieza.socket.tipoSocket.nombre} - {procesador?.pieza.socket.nombre}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cache:</Text> {procesador.cache}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Frecuencia:</Text> {procesador.frecuencia}GHz
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Hilos:</Text> {procesador.hilos}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Integrado:</Text> {procesador.integrado}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad Nucleos:</Text> {procesador.nucleos}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Modelo:</Text> {procesador.pieza.modelo}
        </Text>
      </Stack>
    </Box>
  );
};

export default ProcesadorDetails;
