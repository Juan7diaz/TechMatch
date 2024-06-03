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
import useUSerStore from "../../../store/useUserStore";

const AvatarDropdown: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleLogOut = (): void => {
    useUSerStore.getState().logOut();
    navigate("/");
  };

  const email = useUSerStore((state) => state.email);
  const userName = useUSerStore((state) => state.userName);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"md"} name={userName} bg="yellow.500" />
      </MenuButton>

      <MenuList alignItems={"center"}>
        <Center>
          <Avatar size={"xl"} name={userName} bg="yellow.500" />
        </Center>
        <Center my={4}>
          <Box alignItems={"center"} textAlign="center">
            <Text fontSize={"lg"}>{userName}</Text>
            <Badge colorScheme="green">{email}</Badge>
          </Box>
        </Center>

        <MenuDivider />
        <MenuItem as={NavLink} to={"/profile"} borderRadius={10}>
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
