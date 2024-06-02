import { create } from "zustand";
import { Product } from '../interfaces/product';

interface ProductStore {
  product: Product[] | []
  loadProducts: (product: Product[]) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  getPartType: (id:String) => String
}

const useProductStore = create<ProductStore>()((set, get) => ({
  product: [],
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  loadProducts:  (product) => set( (state) => ({...state, product: product})),
  getPartType: (id) => {
    const product = get().product.find((product: Product) => product.id === id)
    return product?.tipoPieza || ''
  }
}))

export default useProductStore