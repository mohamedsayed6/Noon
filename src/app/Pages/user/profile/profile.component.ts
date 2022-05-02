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
  constructor(private userservice: UserService, private route: Router) {}

  ngOnInit(): void {
    this.userservice.GetAllUsers().subscribe((_user) => {
      this.user = _user.find((i) => i.id == "u2")!;
    });
  }
  UpdateGenral(first: any, last: any) {
    this.user.FirstName = first;
    this.user.LastName = last;
    this.userservice.updateuser(this.user).subscribe({
      next: (pro) => {
        this.route.navigateByUrl("/profile");
      },
    });
  }

  UpdatePassword(password: any) {
    this.user.password = password;

    this.userservice.updateuser(this.user).subscribe({
      next: (pro) => {
        this.route.navigateByUrl("/profile");
      },
    });
  }
}
