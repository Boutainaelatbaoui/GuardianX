import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }


  getUserContent() {
  return  this.http.request('get',`${this.apiUrl}/manager/user-admin`, {
      responseType : "text"
    })
  }

  getAdminContent() {
    return  this.http.request('get',`${this.apiUrl}/manager`, {
      withCredentials: true,
      responseType : "text"
    })
  }
}