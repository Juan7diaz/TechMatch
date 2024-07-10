import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import AvatarDropdown from "./AvatarDropdown";
import { NavLink, Link } from "react-router-dom";
import useUSerStore from "../../../store/useUserStore";
import TechMatchImagotipo from "../../../assets/TechMatchImagotipo";

const Navbar: React.FC = () => {
  const isLogged = useUSerStore((state) => state.isLogged);

  return (
    <Box>
      <Flex
        bg={"#1a1a1a"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 5 }}
        borderBottom={1}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ md: "start" }} alignItems="center">
          <Box display={{ md: "block" }} mr={5} as={NavLink} to={"/"}>
            <TechMatchImagotipo width={150} height={50} />
          </Box>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {isLogged && <AvatarDropdown />}
          {!isLogged && (
            <Button
              color="black"
              bg="linear-gradient(90deg, #f48c04, #ffc300)"
              _hover={{ opacity: 0.8 }}
              rounded="full"
              size="md"
              as={Link}
              to={"/login"}
            >
              Ingresar
            </Button>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
