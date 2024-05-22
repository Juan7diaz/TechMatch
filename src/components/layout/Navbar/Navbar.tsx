import { Box, Flex, Stack } from "@chakra-ui/react";

import AvatarDropdown from "./AvatarDropdown";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
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
          <AvatarDropdown />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
