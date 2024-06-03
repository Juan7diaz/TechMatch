import { useQuery } from "react-query";
import { Product, Ram } from "../interfaces/product";
import { getPiezaBytypeAndId, getPiezas } from "../services/api";

export const useFetchProduct = () => {
  return useQuery<Product[]>({
    queryKey: "products",
    queryFn: getPiezas
  })
}


export const useFetchByType = ({
  type,
  id
}: {
  type: string;
  id: string;

}) => {

  return useQuery<Ram>({
    queryKey: [`${type}-${id}`],
    queryFn: () => getPiezaBytypeAndId(type, id)
  })
}


