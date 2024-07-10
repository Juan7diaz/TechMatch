import {
  Button,
  Flex,
  Input,
  Box,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../services/api";
import { LoginUser } from "../../interfaces/user.interface";
import useUserStore from "../../store/useUserStore";

const LogIn = () => {
  const [dataUser, setDataUser] = useState<LoginUser>({
    nombreUsuario: "",
    password: "",
  });

  const navigate = useNavigate();

  const setUser = useUserStore((state) => state.setDataUser);

  const mutation = useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      setUser(data);
      navigate("/ecommerce");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(dataUser);
  };

  const bgColor = useColorModeValue("white", "gray.700");
  const inputBgColor = useColorModeValue("gray.100", "gray.600");
  const boxShadowColor = useColorModeValue("lg", "dark-lg");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="80vh"
      bg="linear-gradient(135deg, #1a1a1a 0%, #333 100%)"
    >
      <Box
        bg={bgColor}
        p={8}
        rounded="md"
        boxShadow={boxShadowColor}
        maxWidth="400px"
        width="100%"
        mx={4}
      >
        <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
          Iniciar sesión
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            mb={4}
            placeholder="Nombre de usuario"
            name="nombreUsuario"
            value={dataUser.nombreUsuario}
            onChange={handleChange}
            bg={inputBgColor}
            _placeholder={{ color: "gray.500" }}
          />
          <Input
            mb={4}
            placeholder="Contraseña"
            type="password"
            name="password"
            value={dataUser.password}
            onChange={handleChange}
            bg={inputBgColor}
            _placeholder={{ color: "gray.500" }}
          />
          {mutation.isError && (
            <Alert status="error" borderRadius={8} mb={4}>
              <AlertIcon />
              <AlertDescription>
                Hubo un error al iniciar sesión
              </AlertDescription>
            </Alert>
          )}
          <Button
            colorScheme="yellow"
            bg="linear-gradient(90deg, #f48c04, #ffc300)"
            _hover={{ opacity: 0.8 }}
            variant="solid"
            type="submit"
            width="100%"
            isLoading={mutation.isLoading}
            loadingText="Cargando..."
          >
            Iniciar sesión
          </Button>
          <Box textAlign="center" mt={4}>
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              style={{ color: "#d69e2e", fontWeight: "bold" }}
            >
              Regístrate
            </Link>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default LogIn;
