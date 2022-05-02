import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  isSignIn!: boolean;
  isSignUp!: boolean;
  constructor() {}
  ngOnInit(): void {
    this.isSignIn = true;
    this.isSignUp = false;
  }
  openSignIn() {
    console.log("sign in works");
    this.isSignIn = true;
    this.isSignUp = false;
  }
  openSignUp() {
    console.log("sign up works");
    this.isSignIn = false;
    this.isSignUp = true;
  }
}
