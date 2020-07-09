import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './Componentes/details/details.component';
import {LoginComponent} from './Componentes/login/login.component';
import {MasterComponent} from './Componentes/master/master.component';
import {AdminComponent} from './Componentes/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: MasterComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path:  'login', component: LoginComponent },
  { path: 'admin', canActivate: [AdminGuard] , component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
