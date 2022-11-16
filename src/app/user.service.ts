import { User } from './user.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User[] =[
    {
      name:"Ahmed",
      id:"123456789",
      idimage:"../assets/id.jpeg",
      city:"Riyadh",
      DOB:"28/04/1992",
      DOE:"19/01/2032",
      Martialstatus:"Single",
      BloodType:"O+",
      nationality:"King of Saudi Arabia",
      driverlie:"../assets/drive.jpeg",
      faceimg:"../assets/faceimg.jpeg"
    }
  ]
getUsers(){
  return[...this.user]
}
  constructor() { }
}
