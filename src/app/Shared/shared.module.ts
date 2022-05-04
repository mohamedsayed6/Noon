import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { UserHeaderComponent } from "./user-header/user-header.component";
import { UserFooterComponent } from "./user-footer/user-footer.component";
import { SignInComponent } from "./register/sign-in/sign-in.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PayPalComponent } from "./pay-pal/pay-pal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { RegisterComponent } from "./register/register.component";
import { SignUpComponent } from "./register/sign-up/sign-up.component";
import { MatMenuModule } from "@angular/material/menu";
@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    UserHeaderComponent,
    UserFooterComponent,
    SignInComponent,
    SignUpComponent,
    RegisterComponent,
    NotFoundComponent,
    PayPalComponent,
  ],

  imports: [CommonModule, RouterModule, ReactiveFormsModule, BrowserAnimationsModule, MatDialogModule, MatMenuModule], //<==router module is mandatory of your module use [routerlink]

  //<==router module is mandatory of your module use [routerlink]

  exports: [
    HomeHeaderComponent,
    HomeFooterComponent,
    UserHeaderComponent,
    UserFooterComponent,
    SignInComponent,
    SignUpComponent,
    RegisterComponent,
    NotFoundComponent,
    PayPalComponent,
    RouterModule, //<== not duplication
  ],
})
export class SharedModule {}
