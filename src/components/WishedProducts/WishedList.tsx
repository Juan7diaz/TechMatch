import { Button, Flex, Text } from "@chakra-ui/react";
import { getPiezasDeseadasByUsuarioId } from "../../services/api";
import useUSerStore from "../../store/useUserStore";
import DesiredItem from "./DesiredItem";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Loader from "../common/ui/Loader";
import { useNavigate } from "react-router-dom";

function WishedList() {
  const usuarioId = useUSerStore((state) => state.id);
  const isLogged = useUSerStore((state) => state.isLogged);

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getPiezasDeseadasByUsuarioId(usuarioId),
    queryKey: ["desiredItems", usuarioId],
  });

  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      m={4}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Lista de Deseados
      </Text>

      {isLoading && <Loader />}

      {data?.length === 0 && (
        <Flex justify={"center"} alignItems={"center"} flexDirection={"column"}>
          <Text fontSize="lg" fontWeight="bold" pb={5} color={"gray.700"}>
            No tienes productos deseados
          </Text>
          <Button onClick={() => navigate("/ecommerce")} colorScheme="yellow">
            Ir a la tienda
          </Button>
        </Flex>
      )}

      {data?.map((item) => (
        <DesiredItem item={item} refetch={refetch}/>
      ))}
    </Flex>
  );
}

export default WishedList;
