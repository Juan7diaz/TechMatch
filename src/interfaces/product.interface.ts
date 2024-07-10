export interface Ram {
  id: string
  capacidad: number
  velocidad: number
  ECC: boolean
  regBuf: string
  ancho_banda: number
  pieza: Product
}

export interface Procesador {
  id: string
  cache: string
  frecuencia: number
  hilos: number
  integrado: string
  nucleos: number
  pieza: Product
}

export interface Grafica {
  id: string
  ancho_banda: string
  cant_DisplayPorts: number
  cant_HDMI: number
  frecuencia: number
  interfaz_memoria: string
  memoria: number
  nucleos: number
  ventiladores: number
  pieza: Product
}

export interface Placa {
  id: string
  EPS: number
  PCLe_M2: boolean
  alimentacion: number
  cantidadDIMMs: number
  cantidadHDAudio: number
  cantidadHDMI: number
  cantidadUSBC: number
  cantidadUSBTipo2: number
  cantidadUSBTipo3: number
  puertosSATA: number
  puertosVentilador: number
  pump: boolean
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
  tipoPieza: Type
}

export type Type = "RAM" | "GRAFICA" | "PLACA" | "PROCESADOR"

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