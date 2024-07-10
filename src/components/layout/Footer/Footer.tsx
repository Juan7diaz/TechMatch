import {
  Box,
  Container,
  Stack,
  Text,
} from "@chakra-ui/react";
import TechMatchImagotipo from "../../../assets/TechMatchImagotipo";

const Footer: React.FC = () => {
  return (
    <Box
      bg={"#1a1a1a"}
      color={"white"}
      h={{ xl: "max-content" }}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={"#f48c04"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        h={{ xl: "82px" }}
      >
       <TechMatchImagotipo  width={150} height={50} />
        <Text align={"center"}>
          © {new Date().getFullYear()} TechMatch. Todo los derechos reservados
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
