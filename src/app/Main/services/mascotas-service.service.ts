import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Mascotas } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class MascotasServiceService {

  private baseUrl: string = environment.baseUrl;
  Base_URL = 'https://app-keneth.herokuapp.com/getAllpets';
  constructor ( private https: HttpClient) {}

  async getMascotas() {
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
   const url = this.Base_URL;
    let respuesta = [];
    await this.https.get(url).toPromise()
      .then(async (respuestaApi: any) => {
        respuesta = respuestaApi
        console.log('Lista de Mascotas ', respuesta)
        Swal.close()
      })
      .catch(async (err: any) => {
        Swal.close()
        Swal.fire({
          icon: 'error',
          title: 'Servicio no disponible: ' + err
        })
      });
      return respuesta
      }

      async getMascotaById(_id: string) {
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
      const url = `${this.baseUrl}/getPetById/${ _id }`;
      let respuesta = [];
      await this.https.get(url).toPromise()
        .then(async (respuestaApi: any) => {
          respuesta = respuestaApi
          console.log('Mascota ', respuesta)
          Swal.close()
        })
        .catch(async (err: any) => {
          Swal.close()
          Swal.fire({
            icon: 'error',
            title: 'Servicio no disponible: ' + err
          })
        });
        return respuesta
        }


}

