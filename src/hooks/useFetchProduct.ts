import { useQuery } from "react-query";
import { Product } from "../interfaces/product";
import { useEffect } from "react";

const useFetchProduct = (searchParams:URLSearchParams) => {

  const query = searchParams.get("search") || ""

  const data = useQuery<Product[]>({
    queryKey: "products",
    queryFn: async () => {
      const response = await fetch(`https://tecmatch.azurewebsites.net/api/v1/piezas/nombre?contains=${query}`);
      return response.json();
    }
  })

  useEffect(() => {
    data.refetch()
  },[searchParams])

  return data
}

export default useFetchProduct