import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ModalMantenimientoUsuariosAppComponent } from './Main/Modals/modal-mantenimiento-usuarios-app/modal-mantenimiento-usuarios-app.component';
import { MascotasListComponent } from './Main/components/mascotas-list/mascotas-list.component';
import { MascotasFormComponent } from './Main/components/mascotas-form/mascotas-form.component';
import { NavigationComponent } from './Main/components/navigation/navigation.component';
import { AboutUsComponent } from './Main/components/about-us/about-us.component';
import { LoginComponent } from './Main/components/login/login.component';
import { ImagePipe } from './main/pipes/image.pipe';
import { DashboardComponent } from './Main/components/dashboard/dashboard.component';
<<<<<<< HEAD
import { TasksComponent } from './main/components/tasks/tasks.component';
import { PrivateTasksComponent } from './main/components/private-tasks/private-tasks.component';
import { ImagenPipe } from './pipes/imagen.pipe';
=======
import { ModalVermasComponent } from './Main/Models/modal-vermas/modal-vermas.component';
>>>>>>> acdce33899c8069021d74184617fc7efe0dc25b1


@NgModule({
  declarations: [
    AppComponent,
    ModalMantenimientoUsuariosAppComponent,
    MascotasListComponent,
    MascotasFormComponent,
    NavigationComponent,
    AboutUsComponent,
    LoginComponent,
    ImagePipe,
    DashboardComponent,
<<<<<<< HEAD
    TasksComponent,
    PrivateTasksComponent,
    ImagenPipe
=======
    ModalVermasComponent
>>>>>>> acdce33899c8069021d74184617fc7efe0dc25b1
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
