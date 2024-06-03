import { useQuery } from "react-query";
import { Procesador, Product, Ram } from "../interfaces/product";
import { getPiezaBytypeAndId, getPiezas } from "../services/api";

export const useFetchProduct = () => {
  return useQuery<Product[]>({
    queryKey: "products",
    queryFn: getPiezas
  })
}


export const useFetchByType = <T extends Ram | Procesador>({
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


