import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../interfaces/product';
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
    if (searchParams.has("search")) {
      const query = searchParams.get("search") || "";
      const filtered = products?.filter((product) =>
        product.nombre.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [products, searchParams]);

  const haveProducts = ():boolean => (filteredProducts.length > 0 &&  Array.isArray(filteredProducts));

  return {filteredProducts, setFilteredProducts, haveProducts};
}

export default useFilterProduct