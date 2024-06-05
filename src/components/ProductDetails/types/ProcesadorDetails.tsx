import { Text, Stack } from '@chakra-ui/react'
import { Procesador } from '../../../interfaces/product.interface';

const ProcesadorDetails = ({ procesador }: {procesador: Procesador}) => {
  return (
    <Stack spacing={2}>
    <Text fontWeight="bold" fontSize="xl">
      Precio: $ {procesador.pieza.precio.toFixed(2)}
    </Text>
    <Text>Voltaje: {procesador?.pieza.voltaje}</Text>
    <Text>
      Socket: {procesador?.pieza.socket.tipoSocket.nombre} - {procesador?.pieza.socket.nombre}{" "}
    </Text>
    <Text>Cache: {procesador.cache}</Text>
    <Text>Frecuencia: {procesador.frecuencia}</Text>
    <Text>Hilos: {procesador.hilos}</Text>
    <Text>Integrado: {procesador.integrado}</Text>
    <Text>Cantidad Nucleos: {procesador.nucleos}</Text>
    <Text>Modelo: {procesador.pieza.modelo}</Text>
  </Stack>
  )
}

export default ProcesadorDetails