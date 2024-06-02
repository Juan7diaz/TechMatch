import { Input } from "@chakra-ui/react";
import { UseSearch } from "../../../hooks/useSearch";

const InputSearch = ({ object_useSearch }: { object_useSearch: UseSearch }) => {
  return (
    <Input
      value={object_useSearch.query}
      onChange={object_useSearch.handleChange}
      onKeyUp={object_useSearch.handleKeyPress}
      placeholder="Buscar..."
      bg={"white"}
      color={"black"}
      borderColor={"black"}
      maxW="lg"
      borderRadius={0}
      borderTopColor={"white"}
      borderRightColor={"white"}
      borderStartColor={"white"}
      _focus={{
        outline: "none",
        boxShadow: "none",
      }}
    />
  );
};

export default InputSearch;
