import { User } from './../../user.module';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dwallet',
  templateUrl: './dwallet.page.html',
  styleUrls: ['./dwallet.page.scss'],
})
export class DwalletPage implements OnInit {
  user:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user=this.userService.getUsers();

  }

}
