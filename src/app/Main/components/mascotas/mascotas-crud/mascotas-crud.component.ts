import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascotas } from 'src/app/Main/interfaces/interface';
import { MascotasServiceService } from 'src/app/Main/services/mascotas-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascotas-crud',
  templateUrl: './mascotas-crud.component.html',
  styleUrls: ['./mascotas-crud.component.css']
})
export class MascotasCrudComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  
  mascota: Mascotas= {
    _id: '',
    Age: 0,
    Description: '',
    Organization: {
      Name: '',
      Address: {
        Avenue: '',
        City: '',
        Street: '',
        Lat: '',
        Lon: ''
      }
    },
    PetName: '',
    meta: {
      DateCreated: ''
    }
  }

  edit: boolean = false;

  constructor(private mascotaserviceService: MascotasServiceService,
     private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveNewPet(){
    let body={
      Name: this.mascota.Organization.Name,
      City: this.mascota.Organization.Address.City,
      Street: this.mascota.Organization.Address.Street,
      Avenue: this.mascota.Organization.Address.Avenue,
      Lat: this.mascota.Organization.Address.Lat,
      Lon: this.mascota.Organization.Address.Lon,
      PetName: this.mascota.PetName,
      Age: this.mascota.Age,
      Description: this.mascota.Description
      
    }
        this.mascotaserviceService.guardarMascota(body)
        .then( 
          res => {
          console.log(res);
          this.router.navigate(['/mascotas']);
        },
            err => console.error(err)) 
    }

    updatePet() {

      this.mascotaserviceService.updateMascota()
        .then(
          res => { 
            console.log(res);
            this.edit == true;
            this.router.navigate(['/mascotas']);
          },
          err => console.error(err)
        )
    }

}
