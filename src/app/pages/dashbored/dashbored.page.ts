import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.module';

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.page.html',
  styleUrls: ['./dashbored.page.scss'],
})
export class DashboredPage implements OnInit {
  user:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user=this.userService.getUsers();
  }

}
