import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/Services/products.service";
import { IProduct } from "src/app/Models/iproduct";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { ICategory } from "src/app/Models/icategory";

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
  //product categories
  productCategories: ICategory[] = [];
  // last item in category
  lastCat!: ICategory;
  //destroy subscription
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
    // this.sub.forEach((item) => {
    //   item.unsubscribe();
    // });
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      //fetch product id from url
      let num = params.get("id");
      if (num != null) {
        this.selectedProductID = parseInt(num);
      }
      this._productService.GetProductById(this.selectedProductID).subscribe((data) => {
        this.selectedProduct = data;
        // maxCountArr == maxQuantityPerOrder
        for (let i = 1; i <= this.selectedProduct.maxQuantityPerOrder; i++) {
          this.maxCountArr.push(i);
        }
        //get product categories
        this.productCategories = [...this.selectedProduct.proCat]; //clone array
        // remove last element from array
        this.productCategories.pop();
        // last Catetory
        this.lastCat = this.selectedProduct.proCat[this.selectedProduct.proCat.length - 1];
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
  goCatProducts(id: number) {
    this._router.navigate(["/Category", id]);
  }
  //#endregion
}
