export interface Mascotas {
    PetName?: string;
    _id?: string;
    Description?: string;
    Age?: number;
    Organization?:any;
    meta?: any;
    Images?: any;

}

export interface AuthResponse {
    auth?: boolean;
    token?: string;
}

export interface Formularios {
    _id?: string,
    userId?: string,
    nombreSolicitante?: string,
    telefono?: string,
    correo?: string,
    nombreMascota?: string,
    edad?: string,
    raza?: string,
    motivoAdopcion?: string,
    domicilio?: string,
    petId?: string,
    isAdopted?: boolean,
}