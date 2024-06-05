import { ResponseReview, ReviewPost } from "../interfaces/review.interface";
import { LoginUser, RegisterUser, ResponseUser } from "../interfaces/user.interface";
import { ResponseWishedProduct, WishedProductPost } from "../interfaces/wishedProduct.interface";

const BASE_URL = 'https://tecmatch.onrender.com'
//const BASE_URL = 'http://localhost:8080'


// ===================== PIEZAS =========================================================================================================

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


// ===================== AUTH =========================================================================================================

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

// ===================== RESEÑAS =========================================================================================================

export const postReview = async (data: ReviewPost): Promise<ResponseReview> => {

  const response = await fetch(`${BASE_URL}/api/v1/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });


  if (!response.ok) {
    throw new Error('Error al crear review')
  }

  return await response.json()

}

export const getReviewsByPiezaId = async (id: string): Promise<ResponseReview[]> => {

  const response = await fetch(`${BASE_URL}/api/v1/reviews/pieza/${id}`);

  if (!response.ok) {
    throw new Error('Error al crear review')
  }

  return await response.json()

}

export const deleteReviewById = async (id: string) => {

  const response = await fetch(`${BASE_URL}/api/v1/reviews/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error('Error al eliminar review')
  }

  return response

}
// ===================== Lista de deseados =========================================================================================================
export const postPiezaDeseada = async (data: WishedProductPost): Promise<ResponseWishedProduct> => {
  const response = await fetch(`${BASE_URL}/api/v1/piezas-deseadas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Error al añadir una pieza a la lista de deseados')
  }

  return await response.json()
}

export const getPiezasDeseadasByUsuarioId = async (id: string): Promise<ResponseWishedProduct[]> => {

  const response = await fetch(`${BASE_URL}/api/v1/piezas-deseadas/usuario/${id}`);

  if (!response.ok) {
    throw new Error('Error al obtener las piezas deseadas')
  }

  return await response.json()

}

export const getAvgRatingByPiezaId = async (id: string) => {

  const response = await fetch(`${BASE_URL}/api/v1/reviews/pieza/${id}/calificacion-promedio`);

  console.log(response)

  if (!response.ok) {
    throw new Error('Error al obtener el promedio de rating')
  }

  return await response.json()

}
export const deletePiezaDeseadaById = async (id: string) => {

  const response = await fetch(`${BASE_URL}/api/v1/piezas-deseadas/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error('Error al eliminar una pieza de la lista de deseados')
  }

  return response

}
