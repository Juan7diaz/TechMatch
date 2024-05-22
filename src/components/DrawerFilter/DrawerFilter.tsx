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
} from "@chakra-ui/react";
import React from "react";
import { Filter } from "../common/icons/Filter";

function DrawerFilter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [sliderValue, setSliderValue] = React.useState(50);

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
            <Select placeholder="Radio" mb={4}>
              <option value="intel">Intel</option>
              <option value="amd">AMD</option>
              <option value="mediatek">Mediatek</option>
              <option value="tsmc">TSMC</option>
            </Select>
            <Select placeholder="Marca" mb={4}>
              <option value="option1">Marca 1</option>
              <option value="option2">Marca 2</option>
              <option value="option3">Marca 3</option>
            </Select>
            <Select placeholder="Modelo" mb={4}>
              <option value="option1">Modelo 1</option>
              <option value="option2">Modelo 2</option>
              <option value="option3">Modelo 3</option>
            </Select>
            <Flex align="center" mb={4}>
              <Box flex="1" mr={4}>
                Precio
              </Box>
              <Tooltip label={`Precio: $${sliderValue}`} placement="bottom">
                <Slider
                  value={sliderValue}
                  onChange={(val) => setSliderValue(val)}
                  colorScheme="orange"
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Tooltip>
            </Flex>
            <Flex align="center" mb={4}>
              <Box flex="1" mr={4}>
                Velocidad
              </Box>
              <Slider defaultValue={50} colorScheme="orange">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Flex>
            <Flex align="center" mb={4}>
              <Box flex="1" mr={4}>
                Capacidad
              </Box>
              <Slider defaultValue={50} colorScheme="orange">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Flex>
          </DrawerBody>
          <DrawerFooter display="flex" justifyContent="center">
            <Button colorScheme="blue">Filtrar búsqueda</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerFilter;