import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './helpers/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccessDeniedComponent } from './components/errors/access-denied/access-denied.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { adminGuard } from './helpers/admin/admin-guard.guard';
import { noAuthGuardGuard } from './helpers/noAuth/no-auth-guard.guard';
import { userResolver } from "./resolvers/user.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent,
    canActivate: [noAuthGuardGuard]
  },
  {
    path: 'register',
    component:RegisterComponent,
    canActivate: [noAuthGuardGuard]
  },
  {
    path: 'home',
    component: HomeComponent ,
    canActivate: [authGuard],
    resolve: {content: userResolver}
  },
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },

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
