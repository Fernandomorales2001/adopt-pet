import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor( private http: HttpClient) { }

  signin( usuario: string, password: string) {

    const url = `${this.baseUrl}/usuario/signin`;
    const body = { usuario, password };
    
    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( resp => {
        if ( resp.auth ) {
          localStorage.setItem('auth', resp.token!);
          console.log(resp);
        }
      }),
      map( resp => resp.auth),
      catchError ( err => of(err.error.message))
    );
  }

  registro( nombreUsuario: string, correo: string, password: string, telefono: string, direccion: string ) {
    const url  = `${ this.baseUrl }/usuario/signup`;
    const body = { nombreUsuario, correo, password, telefono, direccion };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ auth, token }) => {
          if ( auth ) {
            localStorage.setItem('token', token! );
          }
        }),
        map( resp => resp.auth ),
        catchError( err => of(err.error.message) )
      );

  }

  logout(){
    localStorage.clear();
  }

}
