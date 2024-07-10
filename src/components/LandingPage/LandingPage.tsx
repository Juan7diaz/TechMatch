import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { KeyboardEvent, useState } from "react";
import TechMatchLanding from "../../assets/TechMatchLanding";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/ecommerce?search=${searchTerm}`);
    }
  };

  return (
    <Flex
      w="full"
      minH="100vh"
      bg="linear-gradient(135deg, #1a1a1a 0%, #333 100%)"
      color="white"
      alignItems={"center"}
      justifyContent="space-between"
      pt={useBreakpointValue({ base: 200, md: 0 })}
      px={useBreakpointValue({ base: 4, md: 8 })}
      flexDirection={useBreakpointValue({ base: "column", md: "row" })}
    >
      <VStack
        align="flex-start"
        maxW={useBreakpointValue({ base: "100%", md: "50%" })}
        mb={useBreakpointValue({ base: 8, md: 0 })}
      >
        <Text
          fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
          fontWeight="bold"
          bgGradient="linear(to-r, #f48c04, #ffc300)"
          bgClip="text"
        >
          Tech Match
        </Text>
        <Text
          fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
          maxW="90%"
          pl={3}
        >
          El mejor lugar para encontrar tus piezas de computadora favoritas y al
          mejor precio.
        </Text>
        <HStack w="full" spacing={4} mt={8}>
          <Input
            placeholder="Ingresa un producto o marca"
            bg="rgba(255,255,255,0.1)"
            border="none"
            rounded="full"
            size="lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={handleKeyPress}
            transition={"all 0.3s ease"}
            _focus={{
              borderColor: "#f48c06",
              boxShadow: "0 0 0 1px #f48c06",
              transform: "scale(1.02)",
            }}
          />
          <Button
            bg="linear-gradient(90deg, #f48c04, #ffc300)"
            color="black"
            rounded="full"
            size="lg"
            onClick={() => navigate(`/ecommerce?search=${searchTerm || " "}`)}
            _hover={{ opacity: 0.8 }}
          >
            Buscar
          </Button>
        </HStack>
      </VStack>

      <Box
        display={useBreakpointValue({ base: "none", md: "block" })}
        w={useBreakpointValue({ base: "100%", md: "50%" })}
        h="100%"
        position="relative"
        overflow="hidden"
      >
        <TechMatchLanding width="100%" height="100%" />
      </Box>
    </Flex>
  );
};

export default LandingPage;
