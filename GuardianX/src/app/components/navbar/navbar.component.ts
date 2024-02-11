import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  constructor(private authService : AuthService) {
  }
  showAdminBoard = false;
  AuthUserSub! : Subscription;
  ngOnInit(): void {
    this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
        next : user => {
          if(user) {
            this.showAdminBoard = user.role.name === 'ROLE_ADMIN';
          }
        }
      })
  }

  // handleLogout() {
  //   this.authService.logout();
  // }
  
  ngOnDestroy(): void {
    this.AuthUserSub.unsubscribe();
  }

}
