import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

const USER_KEY = 'authenticated-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

saveUser(user: User, token: string) {
  window.localStorage.removeItem(USER_KEY);
  window.localStorage.setItem(USER_KEY, JSON.stringify({ user, token }));
}

getSavedUser(): { user: User | null, token: string | null } {
  const data = window.localStorage.getItem(USER_KEY);
  console.log(data);
  
  if (data) {
    const { user, token } = JSON.parse(data);
    return { user, token };
  }
  return { user: null, token: null };
}


  clean(): void {
    window.localStorage.clear();
  }
} 