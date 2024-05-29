export interface Product {
  id: string
  nombre: string
  modelo: string
  precio: number
  voltaje: number
  imagen: string
  fabricante: Fabricante
  socket: Socket
}

export interface Fabricante {
  id: string
  nombre: string
}

export interface Socket {
  id: string
  nombre: string
  tipoSocket: TipoSocket
}

export interface TipoSocket {
  id: string
  nombre: string
}