import { Text, Stack } from '@chakra-ui/react'
import { Placa } from '../../../interfaces/product.interface';

const PlacaDetails = ({ placa }: {placa: Placa}) => {
  return (
    <Stack spacing={2}>
    <Text fontWeight="bold" fontSize="xl">
      Precio: $ {placa.pieza.precio.toFixed(2)}
    </Text>
    <Text>Voltaje: {placa?.pieza.voltaje}</Text>
    <Text>
      Socket: {placa?.pieza.socket.tipoSocket.nombre} - {placa?.pieza.socket.nombre}{" "}
    </Text>
    <Text>EPS: {placa.EPS}</Text>
    <Text>PCLe M2: {placa.PCLe_M2}</Text>
    <Text>Alimentación: {placa.alimentacion}</Text>
    <Text>Cantidad de DIMMs: {placa.cantidadDIMMs}</Text>
    <Text>Cantidad de HD audio: {placa.cantidadHDAudio}</Text>
    <Text>Cantidad de HDMI: {placa.cantidadHDMI}</Text>
    <Text>Cantidad de USB C: {placa.cantidadUSBC}</Text>
    <Text>Cantidad de USB tipo 2: {placa.cantidadUSBTipo2}</Text>
    <Text>Cantidad de USB tipo 3: {placa.cantidadUSBTipo3}</Text>
    <Text>Puerto Sata: {placa.puertosSATA}</Text>
    <Text>Puerto Ventilador: {placa.puertosVentilador}</Text>
    <Text>Pump: {placa.pump}</Text>
    <Text>Modelo: {placa.pieza.modelo}</Text>
  </Stack>
  )
}

export default PlacaDetails