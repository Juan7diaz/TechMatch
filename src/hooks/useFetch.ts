import { useQuery } from "react-query";
import { Product, Ram } from "../interfaces/product";

export const useFetchProduct = () => {
  return useQuery<Product[]>({
    queryKey: "products",
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/api/v1/piezas`);
      return response.json();
    }
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
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/api/v1/${type}/pieza/${id}`);
      return response.json();
    }
  })
}


