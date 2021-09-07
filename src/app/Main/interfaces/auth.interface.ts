

export interface AuthResponse {
    auth?: boolean;
    token?: string;
}

export interface Usuario {
    nombreUsuario?: string;
    correo?: string;
    telefono?: string;
    direccion?: string;
}