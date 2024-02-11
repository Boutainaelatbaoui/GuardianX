import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import { User } from 'src/app/models/user';
import { StorageService } from '../storage/storage.service';
import { AuthResponseData } from 'src/app/models/auth-response-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  AuthenticatedUser$  = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  login(email : string, password: string) {
    return this.http.request<AuthResponseData>('post',`${this.apiUrl}/auth/login`,
      {
        body : {email, password},
        withCredentials : true
      }).pipe(
        catchError(err => {
          let errorMessage = 'An unknown error occurred!';
          if(err.error.message === 'Bad credentials') {
            errorMessage = 'The email address or password you entered is invalid'
          }
            return throwError(() =>  new Error(errorMessage))
        }),
        tap(response => {
          const token = response.access_token;
          console.log(token);
          
          const user: User = {
            email: response.email,
            id: response.id,
            role: {
              name: response.roles.find(role => role.includes('ROLE')) || '',
              permissions: response.roles.filter(permission => !permission.includes('ROLE'))
            }
          };
          this.storageService.saveUser(user, token);
          this.AuthenticatedUser$.next(user);
        })
    );
  }
}