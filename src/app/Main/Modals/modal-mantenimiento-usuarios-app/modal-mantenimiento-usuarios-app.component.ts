import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Mascotas } from '../../interfaces/interface';
import { MascotasServiceService } from '../../services/mascotas-service.service';

@Component({
  selector: 'app-modal-mantenimiento-usuarios-app',
  templateUrl: './modal-mantenimiento-usuarios-app.component.html',
  styleUrls: ['./modal-mantenimiento-usuarios-app.component.css']
})
export class ModalMantenimientoUsuariosAppComponent implements OnInit {

  @ViewChild('modalUsuario', { static: false }) modalUsuario: ModalDirective;
  abrirModalVerMas: any;
  currentUser:any={
    nombreUsuario : "",
    telefono:"",
    correo:"",
    id: 0
  };

  mascota: Mascotas = {
    PetName:        '',
    _id:            '',
    Description:    '',
    Age:             0,
    Organization: {
      Name:      ''
    },
    Images: [{}]
  };

  nombreSolicitante:string;
  motivoAdopcion:string
  constructor(private mascotaService: MascotasServiceService) { }


  ngOnInit(): void {


  }

  abrirModal(mascota){
    this.motivoAdopcion = "";
    this.nombreSolicitante = "";
    this.mascota = mascota;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.modalUsuario.show();
  }

  cerrar(){
    this.modalUsuario.hide();
  }

  enviarFomrulario(){
    // let body={
    //   Pet:this.mascota,
    //   userId: this.currentUser._id,
    //   nombreSolicitante: this.nombreSolicitante,
    //   telefono: this.currentUser.telefono,
    //   correo: this.currentUser.correo,
    //   motivoAdopcion: this.motivoAdopcion,
    //   Addres:{
    //     city: this.currentUser.direccion
    //   }
    // }
    let body={
      userId: this.currentUser._id,
      nombreSolicitante: this.nombreSolicitante,
      telefono: this.currentUser.telefono,
      correo: this.currentUser.correo,
      nombreMascota: this.mascota.PetName,
      edad: this.mascota.Age,
      raza: null,
      motivoAdopcion: this.motivoAdopcion,
      domicilio: this.currentUser.direccion,
      petId: this.mascota._id,
      isAdopted: false
    }
    this.mascotaService.adoptarMascota(body).then(resp=>{
      this.cerrar();
    })

  }

  trim(value:string){

  }



}
