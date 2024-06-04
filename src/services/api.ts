import { LoginUser, RegisterUser, ResponseUser } from "../interfaces/user";


const BASE_URL = 'https://tecmatch.onrender.com'
// const BASE_URL = 'http://localhost:8080'

export const getPiezas = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/piezas`);
  return await response.json()
}

export const getPiezaBytypeAndId = async (type: string, id: string) => {
  const response = await fetch(`${BASE_URL}/api/v1/${type}/pieza/${id}`);
  return await response.json()
}

export const postUser = async (data: RegisterUser): Promise<ResponseUser> => {

  const response = await fetch(`${BASE_URL}/api/v1/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Error al crear usuario')
  }

  return await response.json()

}


export const postLogin = async (data: LoginUser): Promise<ResponseUser> => {

  const response = await fetch(`${BASE_URL}/api/v1/usuarios/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Error al iniciar sesión')
  }

  return await response.json()

}
