import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SuperadminComponent } from './components/superadmin/superadmin.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccessDeniedComponent } from './components/errors/access-denied/access-denied.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpInterceptor } from './helpers/http/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SuperadminComponent,
    AdminComponent,
    AccessDeniedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass : HttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
