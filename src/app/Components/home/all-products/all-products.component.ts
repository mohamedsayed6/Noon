import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/Models/iproduct";
import { ProductsService } from "src/app/Services/products.service";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"],
})
export class AllProductsComponent implements OnInit {
  Products!: IProduct[];
  page: number = 1;
  count: number = 0;
  productSize: number = 20;
  productSizes: any = [5, 10, 15, 20];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.GetAllProducts().subscribe((productlist) => (this.Products = productlist));
  }

  onDataChange(event: any) {
    this.page = event;
  }

  onSizeChange(event: any) {
    this.productSize = event.target.value;
    this.page = 1;
  }
}
