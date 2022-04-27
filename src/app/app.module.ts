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
import {HttpClientModule}from '@angular/common/http';
import { AllProductsComponent } from './Components/home/all-products/all-products.component';
import { AfterDiscountPricePipe } from './Pipes/after-discount-price.pipe'
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryProductsComponent } from './Components/home/category-products/category-products.component';
import { PayPalComponent } from './Shared/pay-pal/pay-pal.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';


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
    NotFoundComponent,
    AllProductsComponent,
    AfterDiscountPricePipe,
    CategoryProductsComponent,
    PayPalComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
