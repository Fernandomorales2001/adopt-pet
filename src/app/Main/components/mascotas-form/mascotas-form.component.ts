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

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    nombreUsuario:     ['', [ Validators.required ]],
    correo:    ['', [ Validators.required, Validators.pattern(this.emailPattern) ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    telefono:    ['', [ Validators.required, Validators.minLength(8) ]],
    direccion: ['', [ Validators.required ]],
  });

  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

    campoNoValido(campo: string){
      return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
    }

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