import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _usuario!: Usuario;
  public isLoggedIn:boolean;
  public currentUser:any;
  get usuario() {
    return { ...this._usuario };
  }

  constructor(private https: HttpClient) { 
    this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log('currente user',this.currentUser);
  }

  Base_URL_Form = 'https://app-keneth.herokuapp.com/adopcion/getAllFormularios';

  async getFormularios() {
    Swal.fire(
      {
        title: 'Por favor espere',
        text: 'Obteniendo Data...',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      }
    )
   const url = this.Base_URL_Form;
   const headers = {
     "x-access-token" : localStorage.getItem("token")
   }
    let respuesta = [];
    await this.https.get(url,{headers} ).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
        console.log('Lista de Formularios ', respuesta)
        Swal.close()
      })
      .catch(async (err: any) => {
        Swal.close()
        Swal.fire({
          icon: 'error',
          title: 'Servicio no disponible: ' + err.message
        })
      });
      return respuesta
      }
}
