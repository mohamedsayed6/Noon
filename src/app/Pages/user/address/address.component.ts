import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iuser } from "src/app/Core/Models/iuser";
import { UserService } from "src/app/Core/Services/user.service";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  user!: Iuser;
  constructor(private userservice: UserService, private route: Router) {}

  ngOnInit(): void {
    this.userservice.GetAllUsers().subscribe((_user) => {
      this.user = _user.find((i) => i.id == "u2")!;
    });
  }
  showdiv() {
    let div = document.getElementById("updateAddress");
    div?.classList.remove("d-none");
    document.getElementById("pop")?.classList.add("pop");
  }
  divhide() {
    let div = document.getElementById("updateAddress");
    div?.classList.add("d-none");
    document.getElementById("pop")?.classList.remove("pop");
  }

 
  addAddress(phone: any, address: any,def:any) {
   this.user.Address.push({id:4,address:address,default:def});
    this.userservice.updateuser(this.user).subscribe({
      next: (pro) => {
        this.route.navigateByUrl("/Address");
      },
    });
  }
  change(def:boolean,id:number){

    console.log("ddddddddddddd");
    console.log(this.user)
  this.user.Address.filter(a=>a.id!=id).map(a=>a.default= false)
  this.user.Address.filter(a=>a.id==id).map(a=>a.default= !def)
  console.log(this.user)
  this.userservice.updateuser(this.user).subscribe({
    next: (pro) => {
      this.route.navigateByUrl("/user/Address");
    },
  });
  }
}
