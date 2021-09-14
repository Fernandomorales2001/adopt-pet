export interface Mascotas {
    PetName?: string;
    _id?: string;
    Description?: string;
    Age?: number;
    Images?: string;
    alt_img?: string;
}

export interface AuthResponse {
    auth?: boolean;
    token?: string;
}