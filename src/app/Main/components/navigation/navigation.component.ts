import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isAdmin:boolean=false;

  constructor(private router: Router,
    public authservice: AuthService) { }

  ngOnInit(): void {
    if(this.authservice.currentUser){
      if(this.authservice.currentUser.tipoUsuario == 'admin')
        this.isAdmin =true;
    }
  }

  iniciarSesion() {
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
    this.router.navigate(['mascotas/login'])

  }

  SignUp(){
    Swal.fire({
      imageUrl: 'https://www.bluetissuemexico.com/img/inicia-sesion.gif',
      imageWidth: 120,
      title: 'Por favor espere...',
      showConfirmButton: false,
      timer: 1000,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })
    this.router.navigate(['mascotas/sign']);
    this.authservice.logout();
  }

  logOut(){
    this.authservice.logout();
    this.router.navigate(['mascotas/login'])
    .then(() => {
      window.location.reload();
    });
  }
}
