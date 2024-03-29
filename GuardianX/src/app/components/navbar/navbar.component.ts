import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private authService : AuthService, private storageService : StorageService) {}

  user = this.storageService.getSavedUser();
  showAdminBoard = false;

  ngOnInit(): void {
    if(this.user) {
      console.log(this.user);
      
      this.showAdminBoard = this.user.role.name === 'ROLE_ADMIN';
    }
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  handleLogout() {
    this.authService.logout();
  }
}
