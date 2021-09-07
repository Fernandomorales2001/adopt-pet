import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { AuthResponse, Usuario } from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable, Subscriber } from 'rxjs';

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
        }
      }),
      map( resp => resp.auth),
      catchError ( err => of(err.error.msg))
    );
  }

  validarAuth(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('auth') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('auth', resp.token! );
            this._usuario = {
              nombre: resp.nombre!,
              apellido: resp.apellido!,
              usuario: resp.usuario!
            }

            return resp.auth;
          }),
          catchError( err => of(false) )
        );

  }
}
