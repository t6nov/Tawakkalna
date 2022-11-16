import { User } from './../../user.module';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
user:User[]
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.user=this.userservice.getUsers();
  }

}
