import { create } from "zustand";
import {  ResponseUser } from "../interfaces/user";

interface UserStore {
  id: string
  email: string
  userName: string
  isLogged: boolean
  setDataUser: (data: ResponseUser) => void
  logOut: () => void
}

const useUSerStore = create<UserStore>()((set) => ({
  id: '',
  email: '',
  userName: '',
  isLogged: false,
  setDataUser: (data: ResponseUser) => set({
    id: data.id,
    email: data.correoElectronico,
    userName: data.nombreUsuario,
    isLogged: true
  }),
  logOut: () => set({
    id: '',
    email: '',
    userName: '',
    isLogged: false
  })
}))

export default useUSerStore
