import { Box, Button, Flex, Stack } from "@chakra-ui/react";

import AvatarDropdown from "./AvatarDropdown";
import { NavLink, Link } from "react-router-dom";
import useUSerStore from "../../../store/useUserStore";

const Navbar: React.FC = () => {
  const isLogged = useUSerStore((state) => state.isLogged);

  return (
    <Box>
      <Flex
        bg={"gray.800"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 5 }}
        borderBottom={1}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ md: "start" }} alignItems="center">
          <Box display={{ md: "block" }} mr={5} as={NavLink} to={"/"}>
            <img
              src={
                "https://static.vecteezy.com/system/resources/thumbnails/027/142/314/small_2x/3d-computer-icons-png.png"
              }
              alt="logo"
              width={50}
            />
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
              colorScheme="yellow"
              variant="outline"
              as={Link}
              to={"/login"}
              _hover={{ bg: "yellow.600", color:"white" }}
            >
              Log In
            </Button>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
