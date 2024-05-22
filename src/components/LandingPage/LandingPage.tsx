import {
  Input,
  Stack,
  keyframes,
  VStack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../common/Heading";

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed with search term:", searchTerm);
      navigate(`/ecommerce?search=${searchTerm}`);
    }
  };

  const inputAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

  const bgAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
  `;

  return (
    <Flex w={"full"} h={"calc(100vh - 62px)"}>
      <VStack
        w={"full"}
        justify={"flex-start"}
        align={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        pt={useBreakpointValue({ base: 20, md: 24 })}
        animation={`${bgAnimation} 7s ease infinite`}
        bgSize={"200% 200%"}
        bgGradient="linear(45deg, #2c3a47, #495e70, #485e70, #4a606f, #37474f, #33444c)"
      >
        <Heading />
        <Stack direction={"column"} spacing={4} w={"full"} maxW={"md"}>
          <Input
            placeholder="Escribe tu búsqueda..."
            bg={"transparent"}
            color={"white"}
            rounded={"full"}
            _placeholder={{ color: "white" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={handleKeyPress}
            height={"60px"}
            fontSize={"lg"}
            borderColor={"white"}
            transition={"all 0.3s ease"}
            _focus={{
              borderColor: "#f48c06",
              boxShadow: "0 0 0 1px #f48c06",
              transform: "scale(1.05)",
            }}
            _active={{
              animation: `${inputAnimation} 0.5s ease-in-out`,
              transform: "scale(1.05)",
            }}
          />
        </Stack>
      </VStack>
    </Flex>
  );
};

export default LandingPage;
