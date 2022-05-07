import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./Shared/not-found/not-found.component";
import { PayPalComponent } from "./Shared/pay-pal/pay-pal.component";
import { ProductDetailsComponent } from "./Pages/pro-details/product-details/product-details.component";
import { CartComponent } from "./Pages/cart/cart.component";
import { OrderComponent } from "./Pages/order/order/order.component";
import { PaymentComponent } from "./Pages/order/payment/payment.component";

const routes: Routes = [
  { path: "", redirectTo: "/egypt-en", pathMatch: "full" },
  {
    path: "egypt-en",
    loadChildren: () => import(`./Pages/home/home-routing.module`).then((module) => module.HomeRoutingModule),
  },
  {
    path: "user",
    loadChildren: () =>
      import(`./Pages/user/user-routing/user-routing.module`).then((module) => module.UserRoutingModule),
  },
  { path: "egypt-en/p/:pid", component: ProductDetailsComponent },
  // { path: "SignIn", component: SignInComponent },
  { path: "PayPal", component: PayPalComponent },
  { path: "egypt-en/cart/order", component: OrderComponent },
  { path: "egypt-en/cart/order/payment", component: PaymentComponent },
  { path: "egypt-en/cart", component: CartComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
