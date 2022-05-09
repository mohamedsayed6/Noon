import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IAddress } from "src/app/Core/Models/iaddress";
import { Iuser } from "src/app/Core/Models/iuser";
import { UserService } from "src/app/Core/Services/user.service";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  user!: Iuser;
Addresses!:IAddress[]

  lang!:string
  constructor(private userservice: UserService, private route: Router) {
    this.lang=localStorage.getItem("lang")!
  }

  ngOnInit(): void {
    let  userid=JSON.parse(localStorage.getItem("currentUser")!)
    console.log(userid)
     
    // this.userservice.GetAllUsers().subscribe((_user) => {
    //   this.user = _user.find((i) => i.id == "u2")!;
    // });
  }
  showdivAdd() {
    let div = document.getElementById("AddAddress");
    div?.classList.remove("d-none");
    document.getElementById("pop")?.classList.add("pop");
  }
  showdivupdate(id:number) {
    this.address=this.Addresses.find(a=>a.id=id)!
    let div = document.getElementById("updateAddress");
    div?.classList.remove("d-none");
    document.getElementById("pop")?.classList.add("pop");
  }
  divhideAdd() {
    let div = document.getElementById("AddAddress");
    div?.classList.add("d-none");
    document.getElementById("pop")?.classList.remove("pop");
  }
  divhideupdate() {
    let div = document.getElementById("updateAddress");
    div?.classList.add("d-none");
    document.getElementById("pop")?.classList.remove("pop");
  }
  address!:IAddress
  addAddress( _city: any,street:any,def:any) {
    this.address.city=_city
    this.address.street=street
    this.address.default=def
    console.log(this.address)
   this.user.Address.push(this.address);
    this.userservice.addAddress(this.address).subscribe({
      next: (pro) => {
        this.route.navigateByUrl("/Address");
      },
    });
  }
  change(def:boolean,id:number){

   
      this.Addresses.filter(a=>a.id!=id).map(s=>s.default=false)
      this.Addresses.find(a=>a.id==id)!.default= !def

    
  
  this.userservice.ChangeAddress(this.Addresses).subscribe({
    next: (pro) => {
      this.route.navigateByUrl("/user/Address");
    },
  });
  }
  deleteAddrsess(id:number){
    this.address=this.Addresses.find(a=>a.id==id)!
    this.userservice.deleteAddress(this.address).subscribe(next=>{
      this.route.navigateByUrl("/user/Address");
    })
  }

  updateAddrsess(id:any,_city:string,_street:string){
    this.address=this.Addresses.find(a=>a.id==id)!

    this.address.city=_city;
    this.address.street=_street;
    this.userservice.(this.address).subscribe(next=>{
      this.route.navigateByUrl("/user/Address");
    })
  }
}
