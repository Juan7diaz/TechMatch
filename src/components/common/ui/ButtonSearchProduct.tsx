import { Button } from "@chakra-ui/react";
import { UseSearch } from "../../../hooks/useSearch";

const ButtonSearchProduct = ({
  object_useSearch,
}: {
  object_useSearch: UseSearch;
}) => {
  return (
    <Button
      bg="linear-gradient(90deg, #f48c04, #ffc300)"
      color="black"
      rounded="full"
      _hover={{ opacity: 0.8 }}
      size="md"
      ml={5}
      onClick={() =>
        object_useSearch.setSearchParams({ search: object_useSearch.query })
      }
    >
      Buscar Pieza
    </Button>
  );
};

export default ButtonSearchProduct;
