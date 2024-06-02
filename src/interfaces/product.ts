export interface Ram {
  id: string
  capacidad: number
  velocidad: number
  ECC: boolean
  regBuf: string
  ancho_banda: number
  pieza: Product
}


export interface Product {
  id: string
  nombre: string
  modelo: string
  precio: number
  voltaje: number
  imagen: string
  fabricante: Fabricante
  socket: Socket
  tipoPieza: "RAM" | "GRAFICA" | "PLACA" | "PROCESADOR" | "SOCKET"
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