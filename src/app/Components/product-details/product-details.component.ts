import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/Services/products.service";
import { IProduct } from "src/app/Models/iproduct";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  //=============================================================Properties =================================================
  //#region Properties
  //product id
  selectedProductID!: number;
  //selected Prodeuct
  selectedProduct!: IProduct;
  maxCountArr: number[] = [];
  //child to parent
  @Output()
  cOutEvent!: EventEmitter<any>;
  //
  sub!: Subscription[];
  //#endregion
  //===================================================Constructor + Lifecycle Hooks ========================================
  //#region Lifecycle Hooks

  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnDestroy(): void {
    this.sub.forEach((item) => {
      item.unsubscribe();
    });
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      let num = params.get("pid");
      if (num != null) {
        this.selectedProductID = parseInt(num);
      }
      this._productService.GetProductById(this.selectedProductID).subscribe((data) => {
        this.selectedProduct = data;
        console.log(this.selectedProduct);
        console.log(this.selectedProductID);
        // maxCountArr == maxQuantityPerOrder
        for (let i = 1; i <= this.selectedProduct.maxQuantityPerOrder; i++) {
          this.maxCountArr.push(i);
        }
        console.log(this.maxCountArr);
      });
    });
  }
  //#endregion
  //=============================================================Methods=====================================================
  //#region Methods
  // child to parent communication on click => add to cart file => event emitter fire with data => get child data executed
  addToCartHandler(product: IProduct, count: number) {
    this.cOutEvent.emit({ product: product, count: count });
  }
  //#endregion
}
