import { Button, Flex, Input, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface RegisterFormData {
  email: string;
  password: string;
}

const LogIn = () => {
  const [dataUser, setDataUser] = useState<RegisterFormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", dataUser.email);
    console.log("Contraseña:", dataUser.password);
  };

  return (
    <Flex alignItems="center" justifyContent="center" height="calc(100vh - 148px)"
      backgroundImage={'url("https://img.freepik.com/foto-gratis/fondo-cosmico-luces-laser-azul-claro-oscuro-perfecto-fondo-pantalla-digital_181624-23690.jpg")'}
    >
      <Box
        bg="white"
        p={6}
        rounded="md"
        boxShadow="md"
        maxWidth="400px"
        width="100%"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Iniciar sesión
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            mb={4}
            placeholder="email"
            name="email"
            value={dataUser.email}
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
            _hover={{ bg: "yellow.600", color:"white" }}
          >
            Iniciar sesión
          </Button>
          <Box pt={4}>
            ¿No tienes cuenta?{" "}
            <Link to="/register" style={{ color: "#b7791f" }}>
              Regístrate
            </Link>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default LogIn;
