import { Input } from "@chakra-ui/react";
import React from "react";


interface InputSearchProps {
  query: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputSearch = ({ query, handleChange,  handleKeyPress}: InputSearchProps ) => {
  return (
    <Input
      value={query}
      onChange={handleChange}
      onKeyUp={handleKeyPress}
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
