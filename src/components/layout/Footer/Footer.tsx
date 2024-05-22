import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      bg={"white"}
      color={"gray.700"}
      h={{ xl: "max-content" }}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
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
        <img
          src={
            "https://static.vecteezy.com/system/resources/thumbnails/027/142/314/small_2x/3d-computer-icons-png.png"
          }
          alt="logo"
          width={50}
        />
        <Text align={"center"}>
          © {new Date().getFullYear()} TechMatch. Todo los derechos reservados
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
