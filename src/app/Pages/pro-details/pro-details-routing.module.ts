import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const routes: Routes = [
  {
    path: "egypt-en/:SkuString/:SkuId/p",
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProDetailsRoutingModule {}
