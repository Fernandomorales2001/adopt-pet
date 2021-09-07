import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  signin( usuario: string, password: string): any {

    const url = `${this.baseUrl}/usuario/signin`;
    const body = { usuario, password };
    
    this.http.post<AuthResponse>( url, body );
  }
}
