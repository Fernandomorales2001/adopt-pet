import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Main/components/about-us/about-us.component';
import { MascotasFormComponent } from './Main/components/mascotas-form/mascotas-form.component';
import { MascotasListComponent } from './Main/components/mascotas-list/mascotas-list.component';
import { LoginComponent } from './Main/components/login/login.component';
import { DashboardComponent } from './Main/components/dashboard/dashboard.component';
import { MascotasCrudComponent } from './Main/components/mascotas/mascotas-crud/mascotas-crud.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mascotas',
    pathMatch: 'full'
    
  },
  {
    path: 'mascotas',
    component: MascotasListComponent
  },
  {
    path: 'mascotas/aboutus',
    component: AboutUsComponent
  },
  {
    path: 'mascotas/login',
    component: LoginComponent
  },
  {
    path: 'mascotas/sign',
    component: MascotasFormComponent
  },
  {
    path: 'mascotas/dashboard',
    component: DashboardComponent
  },
  {
    path: 'mascotas/crud',
    component: MascotasCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
