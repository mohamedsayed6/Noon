import { HomeModule } from "./Components/home/home.module";
import { SharedModule } from "./Shared/shared.module";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./Components/home/all-products/all-products.component";
import { CategoryProductsComponent } from "./Components/home/category-products/category-products.component";
// import { HomeComponent } from "./Components/home/home.component";

import { NotFoundComponent } from "./Shared/not-found/not-found.component";
import { PayPalComponent } from "./Shared/pay-pal/pay-pal.component";
import { SignInComponent } from "./Shared/sign-in/sign-in.component";
import { ProductDetailsComponent } from "./Components/pro-details/product-details/product-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/Noon", pathMatch: "full" },
  {
    path: "Noon",
    loadChildren: () => import(`./Components/home/home-routing.module`).then((module) => module.HomeRoutingModule),
  },
  {
    path: "Product",
    loadChildren: () =>
      import(`./Components/pro-details/pro-details-routing.module`).then((module) => module.ProDetailsRoutingModule),
  },
  {
    path: "user",
    loadChildren: () => import(`./user/user-routing/user-routing.module`).then((module) => module.UserRoutingModule),
  },
  { path: "SignIn", component: SignInComponent },
  { path: "PayPal", component: PayPalComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
