import { Text, Stack, Box, Heading, Divider } from '@chakra-ui/react';
import { Ram } from '../../../interfaces/product.interface';

const RamDetails = ({ ram }: { ram: Ram }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" shadow="md" bg="white">
      <Heading size="md" mb={4}>
        Detalles de la RAM
      </Heading>
      <Divider mb={4} />
      <Stack spacing={2}>
        <Text fontWeight="bold" fontSize="xl" color="#f48c04">
          Precio: $ {ram.pieza.precio.toFixed(2)}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Voltaje:</Text> {ram?.pieza.voltaje}W
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Socket:</Text> {ram?.pieza.socket.tipoSocket.nombre} - {ram?.pieza.socket.nombre}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Velocidad:</Text> {ram.velocidad}MHz
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">ECC:</Text> {ram.ECC ? "Sí" : "No"}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Capacidad:</Text> {ram.capacidad}GB
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Ancho de banda:</Text> {ram.ancho_banda}MB/s
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Buffer:</Text> {ram.regBuf}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Modelo:</Text> {ram.pieza.modelo}
        </Text>
      </Stack>
    </Box>
  );
};

export default RamDetails;
