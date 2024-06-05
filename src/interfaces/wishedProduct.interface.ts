import { Product } from "./product.interface";
import { ResponseUser } from "./user.interface";

export interface WishedProductPost{
    usuario:{
        id: String
    };
    pieza:{
        id: String
    }
}
export interface ResponseWishedProduct{
    id: String;
    usuario: ResponseUser;
    pieza: Product;
}