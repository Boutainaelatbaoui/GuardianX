import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs";
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content : string = '';
  user : User | null = null;
  constructor(
    private userService : UserService,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    this.user = this.storageService.getSavedUser();
    // this.userService.getUserContent().subscribe({
    //   next: data => this.content = data,
    //   error: err => console.error(err)
    // });

    this.content = this.activatedRoute.snapshot.data['content'];
  }
}