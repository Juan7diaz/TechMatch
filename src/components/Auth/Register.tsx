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
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../interfaces/user.interface";
import { postUser } from "../../services/api";
import useUserStore from "../../store/useUserStore";
import { useMutation } from "react-query";

const Register = () => {
  const [formData, setFormData] = useState<RegisterUser>({
    correoElectronico: "",
    password: "",
    nombreUsuario: "",
    perm_admin: false,
  });

  const setDataUser = useUserStore((state) => state.setDataUser);

  const navigate = useNavigate();

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
      navigate('/ecommerce');
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
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
        {mutation.isError && (
          <Alert status="error" borderRadius={8} mb={4}>
            <AlertIcon />
            <AlertDescription>
              Hubo un error al registrar el usuario
            </AlertDescription>
          </Alert>
        )}

        <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
          Registro
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            mb={4}
            placeholder="Correo electrónico"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleChange}
            bg={inputBgColor}
            _placeholder={{ color: "gray.500" }}
          />
          <Input
            mb={4}
            placeholder="Nombre de usuario"
            type="text"
            name="nombreUsuario"
            value={formData.nombreUsuario}
            onChange={handleChange}
            bg={inputBgColor}
            _placeholder={{ color: "gray.500" }}
          />
          <Input
            mb={4}
            placeholder="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            bg={inputBgColor}
            _placeholder={{ color: "gray.500" }}
          />
          <Button
            bg="linear-gradient(90deg, #f48c04, #ffc300)"
            _hover={{ opacity: 0.8 }}
            variant="solid"
            type="submit"
            width="100%"
            isLoading={mutation.isLoading}
            loadingText="Cargando..."
          >
            Registrarse
          </Button>
          <Box textAlign="center" mt={4}>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" style={{ color: "#d69e2e", fontWeight: "bold" }}>
              Inicia sesión
            </Link>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
