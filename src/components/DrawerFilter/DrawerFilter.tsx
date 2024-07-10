import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Select,
  DrawerFooter,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React from "react";
import { Filter } from "../common/icons/Filter";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

interface QueryFilter {
  maxPrice: string;
  company: string;
  type: string;
}

function DrawerFilter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const [queryFilter, setQueryFilter] = useState<QueryFilter>({
    maxPrice: searchParams.get("maxPrice") || "",
    company: searchParams.get("company") || "",
    type: searchParams.get("type") || "",
  });

  const updateFilters = () => {
    const params = {
      maxPrice: "",
      company: "",
      type: "",
      model: "",
    };

    if (queryFilter.maxPrice) params.maxPrice = queryFilter.maxPrice;
    if (queryFilter.company) params.company = queryFilter.company;
    if (queryFilter.type) params.type = queryFilter.type;

    setSearchParams(() => params);
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        colorScheme="transparent"
        border={"1px"}
        color={"#F48C06"}
        aria-label="Search database"
        borderRadius={0}
        icon={<Filter />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filtros</DrawerHeader>
          <DrawerBody>
            <FormControl onSubmit={updateFilters}>
              <FormLabel>Tipo de pieza:</FormLabel>
              <Select
                placeholder={queryFilter.type}
                mb={4}
                onChange={(e) =>
                  setQueryFilter((state) => ({
                    ...state,
                    type: e.target.value.trim().toLowerCase(),
                  }))
                }
              >
                <option value="">N/A</option>
                <option value="RAM">RAM</option>
                <option value="GRAFICA">Gráfica</option>
                <option value="PLACA">Placa</option>
                <option value="PROCESADOR">Procesador</option>
              </Select>
              <FormLabel>Fabricante:</FormLabel>
              <Select
                placeholder={queryFilter.company}
                mb={4}
                onChange={(e) =>
                  setQueryFilter((state) => ({
                    ...state,
                    company: e.target.value.trim().toLowerCase(),
                  }))
                }
              >
                <option value="">N/A</option>
                <option value="intel">Intel</option>
                <option value="amd">AMD</option>
                <option value="mediatek">Mediatek</option>
                <option value="tsmc">TSMC</option>
              </Select>
              <FormLabel>Precio Maximo (USD):</FormLabel>
              <NumberInput
                value={queryFilter.maxPrice}
                mb={4}
                onChange={(e) =>
                  setQueryFilter((state) => ({ ...state, maxPrice: e.trim() }))
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </DrawerBody>
          <DrawerFooter display="flex" justifyContent="center">
            <Button
              onClick={updateFilters}
              bg="linear-gradient(90deg, #f48c04, #ffc300)"
              rounded="full"
              size="md"
            >
              Filtrar búsqueda
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerFilter;
