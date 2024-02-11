import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  adminPubContent!: string;
  constructor(private userService : UserService) {
  }
  ngOnInit(): void {
    this.userService.getAdminContent().subscribe({
      next : data => {
        this.adminPubContent = data;
      },
      error : err => console.log(err)
    })
  }
}
