import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Mascotas } from '../../interfaces/interface';
import { ModalMantenimientoUsuariosAppComponent } from '../../Modals/modal-mantenimiento-usuarios-app/modal-mantenimiento-usuarios-app.component';
import { MascotasServiceService } from '../../services/mascotas-service.service';
import { ModalVermasComponent } from '../../Models/modal-vermas/modal-vermas.component';

@Component({
  selector: 'app-mascotas-list',
  templateUrl: './mascotas-list.component.html',
  styleUrls: ['./mascotas-list.component.css']
})
export class MascotasListComponent implements OnInit {
  @ViewChild('controlUsuario', {static: false}) controlUsuario: ModalMantenimientoUsuariosAppComponent
  @ViewChild('controlVerMas', {static: false}) controlVerMas: ModalVermasComponent
  constructor(private mascotasServiceService: MascotasServiceService,
    ) {
   }

   @HostBinding('class') clases = 'row';

   listaMascotas: any = [];
 
  async ngOnInit () {
    await this.getMascotas()
  }



async getMascotas(){
  await this.mascotasServiceService.getMascotas().then( data =>
     {
       this.listaMascotas = data
       console.log(this.listaMascotas);
     });
 }

  abrirModalUsuario(){
    this.controlUsuario.abrirModal();
  }
  
  abrirModalVerMas(){
    this.controlVerMas.abrirModalVerMas();
  }

}
