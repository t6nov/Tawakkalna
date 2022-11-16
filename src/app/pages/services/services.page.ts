import { User } from './../../user.module';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
user:User[]
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.user=this.userservice.getUsers();

  }

}
