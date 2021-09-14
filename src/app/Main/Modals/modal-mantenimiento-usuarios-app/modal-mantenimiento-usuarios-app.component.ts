import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-mantenimiento-usuarios-app',
  templateUrl: './modal-mantenimiento-usuarios-app.component.html',
  styleUrls: ['./modal-mantenimiento-usuarios-app.component.css']
})
export class ModalMantenimientoUsuariosAppComponent implements OnInit {

  @ViewChild('modalUsuario', { static: false }) modalUsuario: ModalDirective;
  abrirModalVerMas: any;

  constructor() { }

  
  ngOnInit(): void {
  }

  abrirModal(){
        this.modalUsuario.show(); 
  }

  cerrar(){
    this.modalUsuario.hide();
  }


 
}
