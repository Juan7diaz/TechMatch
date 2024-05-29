import { useQuery } from "react-query";
import { Product } from "../interfaces/product";
import { useEffect } from "react";

const useFetchProduct = (query:string, searchParams:URLSearchParams) => {
  const data = useQuery<Product[]>({
    queryKey: "products",
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/api/v1/piezas/nombre?contains=${query}`);
      return response.json();
    }
  })

  useEffect(() => {
    data.refetch()
  },[searchParams])

  return data
}

export default useFetchProduct