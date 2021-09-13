import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-vermas',
  templateUrl: './modal-vermas.component.html',
  styleUrls: ['./modal-vermas.component.css']
})
export class ModalVermasComponent implements OnInit {

  @ViewChild('modalVerMas', { static: false }) modalVerMas: ModalDirective;

  constructor() { }

  
  ngOnInit(): void {
  }

  abrirModalVerMas(){
        this.modalVerMas.show(); 
  }

  cerrar(){
    this.modalVerMas.hide();
  }

}
