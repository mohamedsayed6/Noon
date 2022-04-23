import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeHeaderComponent } from './Shared/home-header/home-header.component';
import { HomeFooterComponent } from './Shared/home-footer/home-footer.component';
import { UserHeaderComponent } from './Shared/user-header/user-header.component';
import { UserFooterComponent } from './Shared/user-footer/user-footer.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';
import { SignUpComponent } from './Shared/sign-up/sign-up.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CartComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    UserHeaderComponent,
    UserFooterComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
