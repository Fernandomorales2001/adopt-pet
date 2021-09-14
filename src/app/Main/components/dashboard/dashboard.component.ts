import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `
  ]
})
export class DashboardComponent  {

  usuarios: Usuario;

  get usuario() {
    return this.authService.usuario;
  }


  constructor( private router: Router,
                private authService: AuthService) { }
  
    logout() {
    this.router.navigateByUrl('/mascotas');

  }

}
