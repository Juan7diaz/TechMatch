import { Button } from "@chakra-ui/react";


interface ButtonSearchProductProps {
  setSearchParams: (searchParams: { search: string }) => void;
  query: string;
}

const ButtonSearchProduct = ({setSearchParams, query}: ButtonSearchProductProps) => {
  return (
    <Button
      borderRadius={100}
      ml={5}
      bg={"blue.400"}
      color={"white"}
      onClick={() => setSearchParams({ search: query })}
    >
      Buscar Pieza
    </Button>
  );
};

export default ButtonSearchProduct;
