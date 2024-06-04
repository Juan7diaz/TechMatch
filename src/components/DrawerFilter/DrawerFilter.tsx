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
  Flex,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Tooltip,
  DrawerFooter,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import { Filter } from "../common/icons/Filter";
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function DrawerFilter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [sliderValue, setSliderValue] = React.useState(50);

  const [searchParams, setSearchParams] = useSearchParams();
  const [priceValue, setPriceValue] = useState(parseInt(searchParams.get("maxPrice") || ""));
  const [selectedValue, setSelectedValue] = useState(searchParams.get("model") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [company, setCompany] = useState(searchParams.get("company") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [model, setModel] = useState(searchParams.get("model") || "");

  const updateNumberValue = (value) => {
    setPriceValue(parseInt(value));
    if (priceValue < 1) setMaxPrice("");
    else setMaxPrice(priceValue.toString());
  }

  const handleTextChange = (event) => {
      setSelectedValue(event.target.value);
      setModel(selectedValue);
  }

  const updateFilters = () => {
    const params = {};

    if (maxPrice) params.maxPrice = maxPrice;
    if (company) params.company = company;
    if (type) params.type = type;
    if (model) params.model = model;

    setSearchParams(params);
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        colorScheme="transparent"
        border={"1px"}
        color={"black"}
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
            <FormControl onSubmit={(e) => { e.preventDefault(); updateFilters(); }}>
              <FormLabel>Tipo:</FormLabel>
              <Select placeholder={type} mb={4} onChange={(e) => setType(e.target.value)}>
                <option value="">N/A</option>
                <option value="RAM">RAM</option>
                <option value="GRAFICA">Gráfica</option>
                <option value="PLACA">Placa</option>
                <option value="PROCESADOR">Procesador</option>
              </Select>
              <FormLabel>Fabricante:</FormLabel>
              <Select placeholder={company} mb={4} onChange={(e) => setCompany(e.target.value)}>
                <option value="">N/A</option>
                <option value="intel">Intel</option>
                <option value="amd">AMD</option>
                <option value="mediatek">Mediatek</option>
                <option value="tsmc">TSMC</option>
              </Select>
              <FormLabel>Modelo (Espacio para N/A):</FormLabel>
              <Input placeholder={selectedValue} value={selectedValue} onChange={handleTextChange} />
              <FormLabel>Precio (0 para N/A):</FormLabel>
              <NumberInput value={priceValue} mb={4} onChange={updateNumberValue}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </DrawerBody>
          <DrawerFooter display="flex" justifyContent="center">
            <Button colorScheme="blue" onClick={updateFilters}>Filtrar búsqueda</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerFilter;