import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { NavLink, useNavigate, NavigateFunction } from "react-router-dom";

const AvatarDropdown: React.FC = () => {
  const imgUrl: string = "https://bit.ly/dan-abramov";

  const navigate: NavigateFunction = useNavigate();

  const handleLogOut = (): void => {
    navigate("/");
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"md"} src={imgUrl} />
      </MenuButton>

      <MenuList alignItems={"center"}>
        <Badge
          variant="subtle"
          colorScheme="green"
          textAlign={"center"}
          borderRadius={0}
          fontStyle={"italic"}
          bg={"primary.400"}
          color={"white"}
        >
          Daniel Cogollos
        </Badge>
        <Center>
          <Avatar size={"xl"} src={imgUrl} />
        </Center>
        <Center my={4}>
          <Box alignItems={"center"}>
            <Text fontWeight={500}>danielcogollos@gmail.com</Text>
          </Box>
        </Center>

        <MenuDivider />
        <MenuItem as={NavLink} to={"/settigs"} borderRadius={10}>
          Mi Perfil
        </MenuItem>
        <MenuItem onClick={handleLogOut} borderRadius={10}>
          Cerrar Sesión
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarDropdown;
