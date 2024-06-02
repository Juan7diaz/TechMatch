import { Button } from "@chakra-ui/react";
import { UseSearch } from "../../../hooks/useSearch";

const ButtonSearchProduct = ({
  object_useSearch,
}: {
  object_useSearch: UseSearch;
}) => {
  return (
    <Button
      borderRadius={100}
      ml={5}
      bg={"blue.400"}
      color={"white"}
      onClick={() =>
        object_useSearch.setSearchParams({ search: object_useSearch.query })
      }
    >
      Buscar Pieza
    </Button>
  );
};

export default ButtonSearchProduct;
