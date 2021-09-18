import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Mascotas } from '../../interfaces/interface';
import { MascotasServiceService } from '../../services/mascotas-service.service';

@Component({
  selector: 'app-modal-vermas',
  templateUrl: './modal-vermas.component.html',
  styleUrls: ['./modal-vermas.component.css'],
  styles: [`
  img {
    width: 50%;
    border-radius: 5px;
  }
`]
})
export class ModalVermasComponent implements OnInit {

  @ViewChild('modalVerMas', { static: false }) modalVerMas: ModalDirective;

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


  constructor(private mascotasserviceService: MascotasServiceService) { }


  ngOnInit(): void {
  }

  async abrirModalVerMas(_id: string){
    console.log(_id);
    if (_id!=null) {
      await this.mascotasserviceService.getMascotaById(_id).then( (res:any) =>
      {
        this.mascota = res[0];
        this.mascota._id = _id
        console.log(this.mascota);
      })
    }
        this.modalVerMas.show();
  }

  cerrar(){
    this.modalVerMas.hide();
  }

}
