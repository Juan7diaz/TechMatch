import React, { useMemo } from "react";
import { Container, Heading, Flex, Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserStore";
import { getPiezasDeseadasByUsuarioId } from "../../services/api";
import Loader from "../common/ui/Loader";
import EmptyWishlist from "./EmptyWishlist";
import WishlistItems from "./WishlistItems";
import PurchaseSummary from "./PurchaseSummary";
import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

function WishedList() {
  const usuarioId = useUserStore((state) => state.id);
  const isLogged = useUserStore((state) => state.isLogged);
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getPiezasDeseadasByUsuarioId(usuarioId),
    queryKey: ["desiredItems", usuarioId],
  });

  React.useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  const metadata = useMemo(() => {
    const subtotal =
      data?.reduce((acc, item) => acc + item.pieza.precio, 0) || 0;
    const iva = subtotal * 0.19;
    const deliveryCost = 10000;
    const total = subtotal + iva + deliveryCost;
    return { subtotal, iva, deliveryCost, total };
  }, [data]);


  if (isLoading) return <Loader />;

  const onWhatsAppClick = () => {
    handleWhatsAppClick(data!, metadata, "+573228199152", usuarioId)
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" textAlign="center" mb={10}>
        Tu Lista de Deseos
      </Heading>

      {data?.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <Box flex={2}>
            <WishlistItems items={data || []} refetch={refetch} />
          </Box>
          <Box flex={1}>
            <PurchaseSummary
              subtotal={metadata.subtotal}
              iva={metadata.iva}
              deliveryCost={metadata.deliveryCost}
              total={metadata.total}
              onWhatsAppClick={onWhatsAppClick}
            />
          </Box>
        </Flex>
      )}
    </Container>
  );
}

export default WishedList;
