import { Product } from "./product.interface";
import { ResponseUser } from "./user.interface";

export interface ReviewPost {
  calificacion: number;
  descripcion: string;
  usuario: {
    id: string
  };
  pieza: {
    id: string
  };
}

export interface ResponseReview {
  id: string;
  calificacion: number;
  descripcion: string;
  usuario: ResponseUser;
  pieza: Product
}