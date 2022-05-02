import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ISignIn } from "src/app/Models/view models/vm with request/ISign-in.vm";
import { AuthService } from "src/app/Services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  //=========================================================Properties====================================
  //#region Properties
  loginForm!: FormGroup;
  @Output() emmiterSignUp: EventEmitter<any> = new EventEmitter<any>();
  //#endregion
  //========================================================Lifecycle Hooks==================================
  //#region Lifecycle Hooks
  constructor(private _fb: FormBuilder, private _router: Router, private _auth: AuthService) {
    // redirect to home if already logged in
    if (this._auth.currentUser.isAuthenticated) {
      this._router.navigate(["/"]);
    }
  }
  ngOnDestroy(): void {
    // console.log("destroyed");
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  //#endregion
  //===========================================================Methods======================================
  //#region Methods
  // convenience getter for easy access to form fields
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let vmSignIn: ISignIn = { email: this.email?.value, password: this.password?.value };
    this._auth.login(vmSignIn).subscribe((x) => {
      this._router.navigate(["/"]);
      window.location.reload();
    });
  }
  goSignUp() {
    this.emmiterSignUp.emit();
  }
  //#endregion
}
