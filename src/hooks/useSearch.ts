import { useEffect, useState, KeyboardEvent } from "react";
import { useSearchParams } from "react-router-dom";

export interface UseSearch {
  query: string;
  setQuery: (query: string) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  setSearchParams: (params: Record<string, string>) => void;
  searchParams: URLSearchParams;
  resetQueryAndSearchParams: () => void;
}


const useSearch = (): UseSearch => {

  let [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (searchParams.has("search")) {
      setQuery(searchParams.get("search") || "");
    }
  }, [searchParams]);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchParams({ search: query });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };


  const resetQueryAndSearchParams = () => {
    setQuery("");
    setSearchParams({ search: "" });
  }


  return { query, setQuery, handleChange, handleKeyPress, setSearchParams, searchParams, resetQueryAndSearchParams };

}

export default useSearch