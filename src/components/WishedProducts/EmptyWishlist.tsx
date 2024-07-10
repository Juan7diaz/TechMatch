import {
  Text,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRegHeart, FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const EmptyWishlist = () => {
  const navigate = useNavigate();

  return (
    <MotionBox
      bg={"white"}
      p={10}
      textAlign="center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon as={FaRegHeart} w={20} h={20} color="#f48c04" mb={6} />
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Tu lista de deseos está vacía
      </Text>
      <Text fontSize="md" color={"gray.600"} mb={8}>
        Descubre productos increíbles y añádelos a tu lista para no perderlos de vista.
      </Text>
      <Button
        leftIcon={<FaStore />}
        size="lg"
        bg="linear-gradient(90deg, #f48c04, #ffc300)"
        onClick={() => navigate("/ecommerce")}
        _hover={{ transform: "translateY(-2px)", boxShadow: "lg", opacity: 0.8 }}
        transition="all 0.2s"
      >
        Explorar la Tienda
      </Button>
    </MotionBox>
  );
};

export default EmptyWishlist;