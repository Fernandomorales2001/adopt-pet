import { Component, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  miFormulario: FormGroup = this.fb.group({
    usuario: ['fq962', [Validators.required]],
    password: ['informatica2021', Validators.required]
  })

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) { }


  signin(){
    console.log(this.miFormulario.value);
    
    const { usuario, password } = this.miFormulario.value;

    this.authService.signin( usuario, password )
    .observable( resp => {
      console.log(resp);
    });
    //console.log(this.miFormulario.valid);
  }              
}
