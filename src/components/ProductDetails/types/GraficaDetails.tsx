import { Text, Stack } from '@chakra-ui/react'
import { Grafica } from '../../../interfaces/product.interface';

const GraficaDetails = ({ grafica }: {grafica: Grafica}) => {
  return (
    <Stack spacing={2}>
    <Text fontWeight="bold" fontSize="xl">
      Precio: $ {grafica.pieza.precio.toFixed(2)}
    </Text>
    <Text>Voltaje: {grafica?.pieza.voltaje}</Text>
    <Text>
      Socket: {grafica?.pieza.socket.tipoSocket.nombre} - {grafica?.pieza.socket.nombre}{" "}
    </Text>
    <Text>Ancho de banda: {grafica.ancho_banda}</Text>
    <Text>Cantidad de puerto display: {grafica.cant_DisplayPorts}</Text>
    <Text>Cantidad HDMI display: {grafica.cant_HDMI}</Text>
    <Text>Frecuencia: {grafica.frecuencia}</Text>
    <Text>Interfaz de memoria: {grafica.interfaz_memoria}</Text>
    <Text>Memoria: {grafica.memoria}</Text>
    <Text>Nucleos: {grafica.nucleos}</Text>
    <Text>Ventiladores: {grafica.ventiladores}</Text>
    <Text>Modelo: {grafica.pieza.modelo}</Text>
  </Stack>
  )
}

export default GraficaDetails