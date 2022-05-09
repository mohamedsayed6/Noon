import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iuser } from "src/app/Core/Models/iuser";
import { UserService } from "src/app/Core/Services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user!: Iuser;
  lang:string
  constructor(private userservice: UserService, private route: Router) {
    this.lang=localStorage.getItem("lang")!
  }

  ngOnInit(): void {
    
      this.user =JSON.parse(localStorage.getItem("CurrentUser")!);

  }
  UpdateGenral(first: any, last: any) {
    this.user.FirstName = first;
    this.user.LastName = last;
    this.userservice.updateGeneralInfo(first,last).subscribe({
      next: (pro) => {
        this.route.navigateByUrl("/profile");
      },
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
  updatePassword( cpass: any,newpass:any) {
  

    this.userservice.updatePassword(cpass,newpass).subscribe({
      next: (pro) => {
        this.route.navigateByUrl("/profile");
      },
    });
  }
}
