import { Component, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber, Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  miFormulario: FormGroup = this.fb.group({
    usuario: ['', [Validators.required]],
    password: ['', Validators.required]
  })

  user = {
    usuario: '',
    password: ''
  }
  
  constructor(
              private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }


  signin() {
    console.log(this.miFormulario.value);
    const { usuario, password } = this.miFormulario.value;

    this.authService.signin( usuario, password )
      .subscribe( auth => {
        if ( auth === true) {
          console.log(JSON.stringify(auth))
          this.router.navigate(['/mascotas']);
        } else {
          Swal.fire('Error', auth, 'error');
        }
      });
    // console.log(this.user)
  }     
  
  signup() {
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
    this.router.navigate(['mascotas/sign']);
  }
}
