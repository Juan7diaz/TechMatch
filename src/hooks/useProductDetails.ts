import { useParams, useSearchParams } from "react-router-dom";
import { useFetchByType } from "./useFetch";
import useUSerStore from "../store/useUserStore";
import { useMutation, useQuery } from "react-query";
import { getAvgRatingByPiezaId, postPiezaDeseada } from "../services/api";

const useProductDetails = () => {
  let { id } = useParams();

  let [searchParams] = useSearchParams();

  const { data, isLoading, isError } = useFetchByType({
    type: searchParams.get("type") || "",
    id: id || "",
  });

  const userId = useUSerStore((state) => state.id);

  const mutation = useMutation({
    mutationFn: () =>
      postPiezaDeseada({
        pieza: {
          id: id || "",
        },
        usuario: {
          id: userId,
        },
      }),
  });


  const { data: dataRaiting, isLoading: isLoadingRaiting } = useQuery({
    queryKey: ["rating", id],
    queryFn: () => getAvgRatingByPiezaId(id || ""),
  });


  return {
    product: {
      data,
      isLoading,
      isError
    },
    rating: {
      dataRaiting,
      isLoadingRaiting
    },
    wishedList: {
      add: () => mutation.mutate(),
      isError: mutation.isError,
      isLoading: mutation.isLoading,
      isSuccess: mutation.isSuccess
    },
    user: {
      id: userId
    }
  }

}

export default useProductDetails