import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Core/Models/iuser';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit  {

  
  constructor(private userservices: UserService, private route: Router) {
  
    this.lang=localStorage.getItem("lang")!
   
   }
 
  
  user!:Iuser;
  lang!:string;
  ngOnInit(): void {
    let  userid=JSON.parse(localStorage.getItem("currentUser")!)
    console.log(userid)
     
    this.userservices.GetAllUsers().subscribe((_users) => {
      this.user = _users.find((i) => i.id == "u2")!;
      console.log(this.user)
    });
    
  }
}
