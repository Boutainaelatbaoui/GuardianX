import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseData } from 'src/app/models/auth-response-data';
import { Registration } from 'src/app/models/registration';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  imageUrl: string = 'assets/img/Footer-Logo.png';
  imageSection1: string = 'assets/img/hunt5.jpg';
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  register() {
    if (this.registrationForm.invalid) {
      let errorMessage = '';
  
      if (this.formControls['firstName'].hasError('required')) {
        errorMessage += 'First name is required. ';
      }
  
      if (this.formControls['lastName'].hasError('required')) {
        errorMessage += 'Last name is required. ';
      }
  
      if (this.formControls['email'].hasError('required')) {
        errorMessage += 'Email is required. ';
      } else if (this.formControls['email'].hasError('email')) {
        errorMessage += 'Email is not valid. ';
      }
  
      if (this.formControls['password'].hasError('required')) {
        errorMessage += 'Password is required. ';
      }
  
      Swal.fire('Warning!', errorMessage, 'warning');
      return;
    }
  
    const registerData: Registration = this.registrationForm.value;
  
    this.authService.register(registerData).subscribe(
      (response: AuthResponseData) => {
        console.log('Registration successful', response);
        Swal.fire('Success!', 'Registration successful', 'success');
        this.router.navigate(['/']);
      },
      error => {
        console.error('Registration failed', error);
        Swal.fire('Error!', 'Registration failed', 'error');
      }
    );
  }
  
}
