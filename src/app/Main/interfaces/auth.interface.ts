

export interface AuthResponse {
    auth: boolean;
    token?: string;
    nombre?: string;
    apellido?: string;
    usuario?: string;
}

export interface Usuario {
    nombre: string;
    apellido: string;
    usuario: string;
}