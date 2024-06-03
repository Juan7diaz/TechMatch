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
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../interfaces/user";
import { postUser } from "../../services/api";
import useUSerStore from "../../store/useUserStore";
import { useMutation } from "react-query";

const Register = () => {
  const [formData, setFormData] = useState<RegisterUser>({
    correoElectronico: "juan1@gmail.com",
    password: "123",
    nombreUsuario: "juan1",
    perm_admin: false,
  });

  const setDataUser = useUSerStore((state) => state.setDataUser);

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const mutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      setDataUser(data);
      navigate('/ecommerce')
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
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
        {
          mutation.isError && (
            <Alert status="error" borderRadius={10}>
              <AlertIcon />
              <AlertDescription>
                Hubo un error al registrar el usuario
              </AlertDescription>
            </Alert>
          )
        }

        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Registro
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            mb={4}
            placeholder="correoElectronico"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleChange}
          />
          <Input
            mb={4}
            placeholder="Nombre de usuario"
            type="text"
            name="nombreUsuario"
            value={formData.nombreUsuario}
            onChange={handleChange}
          />
          <Input
            mb={4}
            placeholder="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            colorScheme="yellow"
            variant={"outline"}
            type="submit"
            width="100%"
            _hover={{ bg: "yellow.600", color: "white" }}
          >
            Registrarse
          </Button>
          <Box pt={4}>
            ya tienes cuenta?{" "}
            <Link to="/login" style={{ color: "#b7791f" }}>
              Inicia sesión
            </Link>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
