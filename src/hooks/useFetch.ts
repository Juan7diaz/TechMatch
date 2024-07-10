import { useQuery } from "react-query";
import { Grafica, Placa, Procesador, Product, Ram } from "../interfaces/product.interface";
import { getPiezaBytypeAndId, getPiezas } from "../services/api";

export const useFetchProduct = () => {
  return useQuery<Product[]>({
    queryKey: "products",
    queryFn: getPiezas
  })
}


export const useFetchByType = <T extends Ram | Procesador | Placa | Grafica >({
  type,
  id
}: {
  type: string;
  id: string;

}) => {

  return useQuery<T>({
    queryKey: [`${type}-${id}`],
    queryFn: () => getPiezaBytypeAndId(type, id)
  })
}


