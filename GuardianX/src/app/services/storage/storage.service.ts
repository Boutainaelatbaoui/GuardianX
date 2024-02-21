import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

const USER_KEY = 'authenticated-user';
const ACCESS_TOKEN_KEY = 'access-token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  saveUser(user: User) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify({ user }));
    console.log(user);
  }

  getSavedUser(): User | null {
    const data = window.localStorage.getItem(USER_KEY);
    if (data) {
      console.log(data);
      return JSON.parse(data).user;
    }
    return null;
  }

  saveAccessToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  clean(): void {    
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}
