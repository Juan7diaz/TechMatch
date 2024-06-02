import { Text, Stack } from '@chakra-ui/react'
import { Ram } from '../../../interfaces/product'

const RamDetails = ({ ram }: {ram: Ram}) => {
  return (
    <Stack spacing={2}>
    <Text fontWeight="bold" fontSize="xl">
      Precio: $ {ram.pieza.precio.toFixed(2)}
    </Text>
    <Text>Voltaje: {ram?.pieza.voltaje}</Text>
    <Text>
      Socket: {ram?.pieza.socket.tipoSocket.nombre} - {ram?.pieza.socket.nombre}{" "}
    </Text>
    <Text>Velocidad: {ram.velocidad}</Text>
    <Text>ECC: {ram.ECC ? "Si" : "No"}</Text>
    <Text>Capacidad: {ram.capacidad}</Text>
    <Text>Ancho de banda: {ram.ancho_banda}</Text>
    <Text>Buffer: {ram.regBuf}</Text>
  </Stack>
  )
}

export default RamDetails