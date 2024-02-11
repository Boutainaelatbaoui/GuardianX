import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './helpers/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccessDeniedComponent } from './components/errors/access-denied/access-denied.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent ,
    canActivate: [authGuard],
    data: {roles: ['ROLE_ADMIN','ROLE_USER']}
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    data: {roles: ['ROLE_ADMIN']}
  },
  {
    path: 'forbidden',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
