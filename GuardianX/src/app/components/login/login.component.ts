import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  imageSection3: string = 'assets/img/Hunt4.jpg';
  errorMessage! : string;

  constructor(private authService : AuthService,  private router : Router) {
  }

  onSubmitLogin(formLogin: NgForm) {
    if(!formLogin.valid){
      return;
    }
    const email = formLogin.value.email;
    const password = formLogin.value.password;

    this.authService.login(email, password).subscribe({
      next : userData => {
        this.router.navigate(['home']);
      },
      error : err => {
        this.errorMessage = err;
        console.log(err);
      }
    })
  }
}
