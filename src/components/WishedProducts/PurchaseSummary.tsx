import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Divider,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaStore, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../../utils/currencyFormatter";

interface PurchaseSummaryProps {
  subtotal: number;
  iva: number;
  deliveryCost: number;
  total: number;
  onWhatsAppClick: () => void;
}

const PurchaseSummary = ({
  subtotal,
  iva,
  deliveryCost,
  total,
  onWhatsAppClick,
}: PurchaseSummaryProps) => {

  const navigate = useNavigate();

  const subtotal_formatter = currencyFormatter({ currency: "COP", value: subtotal || 0 });
  const iva_formatter = currencyFormatter({ currency: "COP", value: iva || 0 });
  const deliveryCost_formatter = currencyFormatter({ currency: "COP", value: deliveryCost || 0 });
  const total_formatter = currencyFormatter({ currency: "COP", value: total || 0 });


  return (
    <Box bg={"white"} p={6} borderRadius="xl" boxShadow="md">
      <Heading as="h3" size="lg" mb={4}>
        Resumen de Compra
      </Heading>
      <VStack spacing={3} align="stretch">
        <HStack justify="space-between">
          <Text>Subtotal:</Text>
          <Text fontWeight="bold">{subtotal_formatter}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text>IVA (19%):</Text>
          <Text fontWeight="bold">{iva_formatter}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text>Costo de entrega (15%):</Text>
          <Text fontWeight="bold">{deliveryCost_formatter}</Text>
        </HStack>
        <Divider />
        <HStack justify="space-between" fontWeight="bold" fontSize="lg">
          <Text>Total:</Text>
          <Text>{total_formatter}</Text>
        </HStack>
        <Button
          leftIcon={<Icon as={FaWhatsapp} />}
          colorScheme="whatsapp"
          size="lg"
          mt={4}
          onClick={onWhatsAppClick}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
            opacity: 0.8,
          }}
        >
          Comprar por WhatsApp
        </Button>
        <Button
          leftIcon={<FaStore />}
          size="lg"
          textColor={"white"}
          bg="linear-gradient(90deg, #f48c04, #ffc300)"
          onClick={() => navigate("/ecommerce")}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
            opacity: 0.8,
          }}
          transition="all 0.2s"
        >
          Seguir Comprando
        </Button>
      </VStack>
    </Box>
  );
};

export default PurchaseSummary;
