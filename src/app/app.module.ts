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
import { DashboardComponent } from './Main/components/dashboard/dashboard.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ModalVermasComponent } from './Main/Models/modal-vermas/modal-vermas.component';
import { MascotasCrudComponent } from './Main/components/mascotas/mascotas-crud/mascotas-crud.component';




@NgModule({
  declarations: [
    AppComponent,
    ModalMantenimientoUsuariosAppComponent,
    MascotasListComponent,
    MascotasFormComponent,
    NavigationComponent,
    AboutUsComponent,
    LoginComponent,
    DashboardComponent,
    ImagenPipe,
    ModalVermasComponent,
    MascotasCrudComponent
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
