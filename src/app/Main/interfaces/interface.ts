export interface Mascotas {
    PetName?: string;
    _id?: string;
    Description?: string;
    Age?: number;
    Organization:any;
    meta?: any;
    Images?: any;

}

export interface AuthResponse {
    auth?: boolean;
    token?: string;
}
