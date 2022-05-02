import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { UserHeaderComponent } from "./user-header/user-header.component";
import { UserFooterComponent } from "./user-footer/user-footer.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PayPalComponent } from "./pay-pal/pay-pal.component";
import { NgxImageZoomModule } from "ngx-image-zoom";

@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    UserHeaderComponent,
    UserFooterComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    PayPalComponent,
  ],
  imports: [CommonModule, RouterModule, NgxImageZoomModule], //<==router module is mandatory of your module use [routerlink]
  exports: [
    HomeHeaderComponent,
    HomeFooterComponent,
    UserHeaderComponent,
    UserFooterComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    PayPalComponent,
    RouterModule, //<== not duplication
    NgxImageZoomModule,
  ],
})
export class SharedModule {}
