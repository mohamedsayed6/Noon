import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
user!:Iuser
  constructor(private userservice:UserService,private route:Router) { }

  ngOnInit(): void {
    this.userservice.GetAllUsers().subscribe(_user=>{
      this.user= _user.find(i=>i.id=="u2")!;
    
    })
  }
  showdiv(){
  let  div=document.getElementById("updateAddress")
        div?.classList.remove("d-none")
      document.getElementById("pop")?.classList.add("pop")
  }
  divhide(){
    let  div=document.getElementById("updateAddress")
        div?.classList.add("d-none")
        document.getElementById("pop")?.classList.remove("pop")
  }

  Updateuser(phone:any,address:any){
    
    this.user.phone=phone;
    this.user.Address=address
    this.userservice.updateuser(this.user).subscribe({
     next:(pro)=>{
       this.route.navigateByUrl("/Address");
     }
    });
}
}
