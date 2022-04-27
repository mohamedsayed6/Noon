import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './Components/home/all-products/all-products.component';
import { CategoryProductsComponent } from './Components/home/category-products/category-products.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { PayPalComponent } from './Shared/pay-pal/pay-pal.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';

const routes: Routes = [
  {path:"",redirectTo:'/Noon',pathMatch:'full'},
  {path:"Noon",component:HomeComponent},
  {path:"SignIn",component:SignInComponent},
  {path:"All Products",component:AllProductsComponent},
  {path:"Product/:pid",component:ProductDetailsComponent},
  {path:"Category/:cid",component:CategoryProductsComponent},
  {path:"PayPal",component:PayPalComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
