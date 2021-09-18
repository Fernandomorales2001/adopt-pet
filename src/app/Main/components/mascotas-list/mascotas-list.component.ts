import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Mascotas } from '../../interfaces/interface';
import { ModalMantenimientoUsuariosAppComponent } from '../../Modals/modal-mantenimiento-usuarios-app/modal-mantenimiento-usuarios-app.component';

import { ModalVermasComponent } from '../../Models/modal-vermas/modal-vermas.component';
import { AuthService } from '../../services/auth.service';
import { MascotasServiceService } from '../../services/mascotas-service.service';

@Component({
  selector: 'app-mascotas-list',
  templateUrl: './mascotas-list.component.html',
  styleUrls: ['./mascotas-list.component.css']
})
export class MascotasListComponent implements OnInit {
  @ViewChild('controlUsuario', {static: false}) controlUsuario: ModalMantenimientoUsuariosAppComponent
  @ViewChild('controlVerMas', {static: false}) controlVerMas: ModalVermasComponent
  _id: string = null;
  constructor(private mascotasServiceService: MascotasServiceService,
    public authService: AuthService
    ) {
   }

   @HostBinding('class') clases = 'row';

   listaMascotas: any = [];

  async ngOnInit () {
    if(this.authService.isLoggedIn)
      await this.getMascotas()
  }



async getMascotas(){
  await this.mascotasServiceService.getMascotas().then( data =>
     {
       this.listaMascotas = data
       console.log(this.listaMascotas);
     });
 }

  abrirModalUsuario( mascota){

    this.controlUsuario.abrirModal(mascota);
  }

  abrirModalVerMas(_id:string=null){
    this.controlVerMas.abrirModalVerMas(_id);
    console.log(JSON.stringify(_id))
  }

}
