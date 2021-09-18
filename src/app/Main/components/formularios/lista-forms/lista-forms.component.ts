import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { FormService } from '../../../services/services/form.service';
import { Formularios } from '../../../interfaces/interface';


@Component({
  selector: 'app-lista-forms',
  templateUrl: './lista-forms.component.html',
  styleUrls: ['./lista-forms.component.css']
})
export class ListaFormsComponent implements OnInit {
  listaFormularios: Formularios[];
  constructor(private formService: FormService) { 

  }

  async ngOnInit () {
    if(this.formService.isLoggedIn)
      await this.getFormulario()
  }

  async getFormulario(){
    await this.formService.getFormularios().then( data =>
       {
         this.listaFormularios = data
         console.log(this.listaFormularios);
       });
   }

}
