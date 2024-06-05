import React from "react";
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Grid,
  GridItem,
  Stack,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const ConstructionList: React.FC = () => {
  return (
    <Box
      mt={"10vh"}
      mb={4}
      alignItems="center"
      bg="gray.100"
      p={6}
      mx={{ base: 3, lg: 20 }}
      rounded="md"
    >
      <Heading mb={4} size={"md"}>
        LISTA DE CONSTRUCCIÓN
      </Heading>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        <GridItem gap={10}>
          <Stack spacing="24px">
            <Box>
              <Text fontWeight={"bold"}>Placa</Text>
              <UnorderedList spacing={2}>
                <ListItem>
                  Motherboard Lga 1155 Ddr3 Intel Core I7 I5{" "}
                  <IconButton
                    ml={10}
                    aria-label="Delete"
                    icon={<BiTrash color="red" />}
                    variant="ghost"
                  />
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Procesador</Text>
              <UnorderedList spacing={2}>
                <ListItem>
                  Motherboard Lga 1155 Ddr3 Intel Core I7 I5{" "}
                  <IconButton
                    ml={10}
                    aria-label="Delete"
                    icon={<BiTrash color="red" />}
                    variant="ghost"
                  />
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Ram</Text>
              <UnorderedList spacing={2}>
                <ListItem>
                  Motherboard Lga 1155 Ddr3 Intel Core I7 I5{" "}
                  <IconButton
                    ml={10}
                    aria-label="Delete"
                    icon={<BiTrash color="red" />}
                    variant="ghost"
                  />
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <Center>
            <Button
              as={Link}
              to={"/ecommerce"}
              mt={4}
              variant={"outline"}
              borderColor={"blue.400"}
              color={"blue.400"}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              Añadir
            </Button>
          </Center>
        </GridItem>
        <GridItem rounded="md" bg="gray.300" p={10}>
          <Stack spacing={"20px"}>
          <Text>
            <b>Precio total:</b> 232 cop
          </Text>
          <Text>
            <b>RAM:</b> 3GB
          </Text>
          <Text>
            <b>Procesador:</b> core i9
          </Text>
          <Text>
            <b>Velocidad:</b> 4 MHz
          </Text>
          <Text>
            <b>Gráfica:</b> si
          </Text>
          <Text>
            <b>Voltaje mínimo:</b> 34W
          </Text>
          </Stack>
        </GridItem>
      </Grid>
      <Button mt={4}  variant={"outline"}
              borderColor={"red.300"}
              color={"red.300"}
              _hover={{ bg: "red.300", color: "white" }}>Vaciar Lista</Button>
    </Box>
  );
};

export default ConstructionList;
