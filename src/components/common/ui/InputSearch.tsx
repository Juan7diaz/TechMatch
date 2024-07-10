import { Input } from "@chakra-ui/react";
import { UseSearch } from "../../../hooks/useSearch";

const InputSearch = ({ object_useSearch }: { object_useSearch: UseSearch }) => {
  return (
    <Input
      value={object_useSearch.query}
      onChange={object_useSearch.handleChange}
      onKeyUp={object_useSearch.handleKeyPress}
      placeholder="Buscar..."
      bg={"transparent"}
      color={"black"}
      borderColor={"#F48C06"}
      maxW="lg"
      borderRadius={0}
      borderTopColor={"transparent"}
      borderRightColor={"transparent"}
      borderStartColor={"transparent"}
      _focus={{
        outline: "none",
        boxShadow: "none",
        borderTopColor: "transparent",
        borderBottomColor: "#ffc300",
        borderRightColor: "transparent",
        borderStartColor: "transparent",
      }}
      _hover={{
        outline: "none",
        boxShadow: "none",
        borderTopColor: "transparent",
        borderBottomColor: "#ffc300",
        borderRightColor: "transparent",
        borderStartColor: "transparent",
      }}
    />
  );
};

export default InputSearch;
