import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }


  getUserContent() {
  return  this.http.request('get',`${this.apiUrl}/manager/user`, {
      withCredentials: true,
      responseType : "text"
    })
  }

  getAdminContent() {
    return  this.http.request('get',`${this.apiUrl}/manager/admin`, {
      withCredentials: true,
      responseType : "text"
    })
  }
}