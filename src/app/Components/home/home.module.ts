import { RouterModule } from "@angular/router";
import { SharedModule } from "./../../Shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./main/home.component";
import { CategoryProductsComponent } from "./category-products/category-products.component";
import { AllProductsComponent } from "./all-products/all-products.component";
import { NgxPaginationModule } from "ngx-pagination";
import { AfterDiscountPricePipe } from "src/app/Pipes/after-discount-price.pipe";
import { HomeRoutingModule } from "./home-routing.module";
@NgModule({
  declarations: [HomeComponent, CategoryProductsComponent, AllProductsComponent, AfterDiscountPricePipe],
  imports: [CommonModule, HomeRoutingModule, SharedModule, RouterModule, NgxPaginationModule],
})
export class HomeModule {}
