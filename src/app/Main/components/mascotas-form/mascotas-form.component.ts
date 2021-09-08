import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mascotas-form',
  templateUrl: './mascotas-form.component.html',
  styleUrls: ['./mascotas-form.component.css']
})
export class MascotasFormComponent {


  miFormulario: FormGroup = this.fb.group({
    nombreUsuario:     ['Test 4', [ Validators.required ]],
    correo:    ['test4@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
    telefono:    ['995278964', [ Validators.required, Validators.minLength(8) ]],
    direccion: ['Choloma City', [ Validators.required ]],
  });

  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }


  sign() {
    Swal.fire({
      imageUrl: 'https://images-platform.99static.com//5UVmo34lvV8g_hpGoYc1U008wT8=/497x2491:998x2992/fit-in/500x500/99designs-contests-attachments/104/104308/attachment_104308310',
      imageWidth: 120,
      title: 'Por favor espere...',
      showConfirmButton: false,
      timer: 1000,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })
    this.router.navigate(['mascotas/login']);
  }

  registro() {
    const { nombreUsuario, correo, password, telefono, direccion} = this.miFormulario.value;

    this.authService.registro( nombreUsuario, correo, password, telefono, direccion )
      .subscribe( resp => {

        if ( resp === true ) {
          this.router.navigateByUrl('mascotas/login');
        } else {
          Swal.fire('Error', 'error');
        }
      });

  }

}