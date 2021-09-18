export interface Mascotas {
    PetName?: string;
    _id?: string;
    Description?: string;
    Age?: number;

    alt_img?: string;
    Organization:any;
    Images: any;

}

export interface AuthResponse {
    auth?: boolean;
    token?: string;
}
