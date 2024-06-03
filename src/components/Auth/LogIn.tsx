import {
  Button,
  Flex,
  Input,
  Box,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../services/api";
import { LoginUser } from "../../interfaces/user";
import useUSerStore from "../../store/useUserStore";

const LogIn = () => {
  const [dataUser, setDataUser] = useState<LoginUser>({
    nombreUsuario: "",
    password: "",
  });

  const navigate = useNavigate();

  const setUser = useUSerStore((state) => state.setDataUser);

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

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 148px)"
      backgroundImage={
        'url("https://img.freepik.com/foto-gratis/fondo-cosmico-luces-laser-azul-claro-oscuro-perfecto-fondo-pantalla-digital_181624-23690.jpg")'
      }
    >
      <Box
        bg="white"
        p={6}
        rounded="md"
        boxShadow="md"
        maxWidth="400px"
        width="100%"
      >
        {mutation.isError && (
          <Alert status="error" borderRadius={60}>
            <AlertIcon />
            <AlertDescription>
              Hubo un error al registrar el usuario
            </AlertDescription>
          </Alert>
        )}

        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Iniciar sesión
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            mb={4}
            placeholder="Nombre de usuario"
            name="nombreUsuario"
            value={dataUser.nombreUsuario}
            onChange={handleChange}
          />
          <Input
            mb={4}
            placeholder="Contraseña"
            type="password"
            name="password"
            value={dataUser.password}
            onChange={handleChange}
          />
          <Button
            colorScheme="yellow"
            variant={"outline"}
            type="submit"
            width="100%"
            _hover={{ bg: "yellow.600", color: "white" }}
            isLoading={mutation.isLoading}
            loadingText = "Cargando..."
          >
            Iniciar sesión
          </Button>
          <Box pt={4}>
            ¿No tienes cuenta?{" "}
            <Link to="/register" style={{ color: "#b7791f" }} >
              Regístrate
            </Link>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default LogIn;
