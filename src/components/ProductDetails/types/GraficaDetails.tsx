import { Text, Stack, Box, Heading, Divider } from '@chakra-ui/react';
import { Grafica } from '../../../interfaces/product.interface';

const GraficaDetails = ({ grafica }: {grafica: Grafica}) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" shadow="md" bg="white">
      <Heading size="md" mb={4}>
        Detalles de la Gráfica
      </Heading>
      <Divider mb={4} />
      <Stack spacing={2}>
        <Text>
          <Text as="span" fontWeight="semibold">Voltaje:</Text> {grafica?.pieza.voltaje}W
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Socket:</Text> {grafica?.pieza.socket.tipoSocket.nombre} - {grafica?.pieza.socket.nombre}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Ancho de banda:</Text> {grafica.ancho_banda} GB/s
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad de puertos Display:</Text> {grafica.cant_DisplayPorts}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad de puertos HDMI:</Text> {grafica.cant_HDMI}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Frecuencia:</Text> {grafica.frecuencia} GHz
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Interfaz de memoria:</Text> {grafica.interfaz_memoria}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Memoria:</Text> {grafica.memoria}GB
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Núcleos:</Text> {grafica.nucleos}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Ventiladores:</Text> {grafica.ventiladores}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Modelo:</Text> {grafica.pieza.modelo}
        </Text>
      </Stack>
    </Box>
  );
};

export default GraficaDetails;
