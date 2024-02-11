import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  content : string = '';
  user! : User;
  AuthUserSub! : Subscription;
  constructor(
    private userService : UserService,
    private authService : AuthService
  ) {
  }
  ngOnInit(): void {
    this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
      next : user => {
        if(user) this.user = user;
      }
    })

    this.userService.getUserContent().subscribe({
      next : data => {
        this.content = data;
      },
      error : err => console.log(err)
    })
  }
  ngOnDestroy() {
    this.AuthUserSub.unsubscribe();
  }
}