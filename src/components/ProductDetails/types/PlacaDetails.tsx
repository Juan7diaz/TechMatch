import { Text, Stack, Box, Heading, Divider } from '@chakra-ui/react';
import { Placa } from '../../../interfaces/product.interface';

const PlacaDetails = ({ placa }: { placa: Placa }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" shadow="md" bg="white">
      <Heading size="md" mb={4}>
        Detalles de la Placa Base
      </Heading>
      <Divider mb={4} />
      <Stack spacing={2}>
        <Text>
          <Text as="span" fontWeight="semibold">Voltaje:</Text> {placa?.pieza.voltaje}W
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Socket:</Text> {placa?.pieza.socket.tipoSocket.nombre} - {placa?.pieza.socket.nombre}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">EPS:</Text> {placa.EPS}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">PCLe M2:</Text> {placa.PCLe_M2}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Alimentación:</Text> {placa.alimentacion}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad de DIMMs:</Text> {placa.cantidadDIMMs}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad de HD audio:</Text> {placa.cantidadHDAudio}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad de HDMI:</Text> {placa.cantidadHDMI}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad de USB C:</Text> {placa.cantidadUSBC}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad de USB tipo 2:</Text> {placa.cantidadUSBTipo2}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Cantidad de USB tipo 3:</Text> {placa.cantidadUSBTipo3}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Puerto Sata:</Text> {placa.puertosSATA}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Puerto Ventilador:</Text> {placa.puertosVentilador}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Pump:</Text> {placa.pump}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">Modelo:</Text> {placa.pieza.modelo}
        </Text>
      </Stack>
    </Box>
  );
};

export default PlacaDetails;
