export interface RegisterUser {
  correoElectronico: string;
  password: string;
  nombreUsuario: string;
  perm_admin: boolean;
}

export interface ResponseUser {
  id: string;
  correoElectronico: string;
  nombreUsuario: string;
}

export interface LoginUser {
  nombreUsuario: string;
  password: string;
}