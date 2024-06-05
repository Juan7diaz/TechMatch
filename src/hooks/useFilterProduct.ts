import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../interfaces/product.interface';
import useProductStore from '../store/useProductStore';

const useFilterProduct = () => {

  let [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const products = useProductStore((state) => state.product);

  useEffect(() => {
    if (!products) return;
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    let filtered = products;
    let currentProducts = products;
    if (searchParams.has("search")) {
      const query = searchParams.get("search") || "";
      filtered = products?.filter((product) =>
        product.nombre.toLowerCase().includes(query.toLowerCase())
      );
      currentProducts = filtered;
    }
    if (searchParams.has("maxPrice")) {
      const maxPrice = parseFloat(searchParams.get("maxPrice") || "Infinity");
      filtered = currentProducts?.filter((product) =>
        product.precio <= maxPrice)
      currentProducts = filtered;
    }
    if (searchParams.has("company")) {
      const company = searchParams.get("company") || "";
      filtered = currentProducts?.filter((product) =>
        product.fabricante.nombre.toLowerCase().includes(company.toLowerCase()))
      currentProducts = filtered;
    }
    if (searchParams.has("type")) {
      const type = searchParams.get("type") || "";
      filtered = currentProducts?.filter((product) =>
        product.tipoPieza.toUpperCase().includes(type.toUpperCase()))
      currentProducts = filtered;
    }
    if (searchParams.has("model")) {
      const type = searchParams.get("model") || "";
      filtered = currentProducts?.filter((product) =>
        product.modelo.toLowerCase().includes(type.toLowerCase()))
      currentProducts = filtered;
    }
    setFilteredProducts(filtered);
  }, [products, searchParams]);

  const haveProducts = ():boolean => (filteredProducts.length > 0 &&  Array.isArray(filteredProducts));

  return {filteredProducts, setFilteredProducts, haveProducts};
}

export default useFilterProduct