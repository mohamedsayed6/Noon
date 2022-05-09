import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserAddress } from "src/app/Core/Models/user-address";
import { Iuser } from "src/app/Core/Models/iuser";
import { UserService } from "src/app/Core/Services/user.service";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  user!: Iuser;
  Addresses!: UserAddress[];

  lang!: string;
  constructor(private userservice: UserService, private route: Router) {
    this.lang = localStorage.getItem("lang")!;
  }

  ngOnInit(): void {
    let userid = JSON.parse(localStorage.getItem("currentUser")!);
    console.log(userid);

    this.userservice.GetAllAddress().subscribe((_address) => {
      this.Addresses = _address;
    });
  }
  showdivAdd() {
    let div = document.getElementById("addAddress");
    div?.classList.remove("d-none");
    document.getElementById("pop")?.classList.add("pop");
  }
  showdivupdate(id: number) {
    this.address = this.Addresses.find((a) => (a.id = id))!;
    let div = document.getElementById("updateAddress");
    div?.classList.remove("d-none");
    document.getElementById("pop")?.classList.add("pop");
  }
  divhideAdd() {
    let div = document.getElementById("addAddress");
    div?.classList.add("d-none");
    document.getElementById("pop")?.classList.remove("pop");
  }
  divhideupdate() {
    let div = document.getElementById("updateAddress");
    div?.classList.add("d-none");
    document.getElementById("pop")?.classList.remove("pop");
  }
  address!: UserAddress;
  addAddress(_city: any, street: any, postal: any) {
    this.address.city = _city;
    this.address.street = street;
    this.address.postalCode = postal;
    this.userservice.addAddress(this.address).subscribe({
      next: (pro) => {
        this.route.navigateByUrl("/Address");
      },
    });
  }
  change(def: boolean) {
    // this.Addresses.filter((a) => a.id != id).map((s) => (s.isPrimary = false));
    // this.Addresses.find((a) => a.id == id)!.isPrimary = !def;
    this.address.isPrimary = def;
    this.userservice.UpdateAddress(this.address).subscribe({
      next: (pro) => {
        this.route.navigateByUrl("/user/Address");
      },
    });
  }
  deleteAddrsess(id: number) {
    this.userservice.deleteAddress(id).subscribe((next) => {
      this.route.navigateByUrl("/user/Address");
    });
  }

  updateAddrsess(id: any, _city: string, _street: string, postal: string) {
    this.address = this.Addresses.find((a) => a.id == id)!;

    this.address.city = _city;
    this.address.street = _street;
    this.userservice.UpdateAddress(this.address).subscribe((next) => {
      this.route.navigateByUrl("/user/Address");
    });
  }
}
