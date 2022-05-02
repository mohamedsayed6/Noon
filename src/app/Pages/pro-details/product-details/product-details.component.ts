import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/Core/Services/products.service";
import { IProduct } from "src/app/Core/Models/iproduct";
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs";
import { ICategory } from "src/app/Core/Models/icategory";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  //=============================================================Properties =================================================
  //#region Properties
  //product id
  selectedProductID!: string;
  //selected Prodeuct
  selectedProduct!: IProduct;
  maxCountArr: number[] = [];
  //child to parent
  // @Output()
  // cOutEvent!: EventEmitter<any>;
  //product categories
  productCategories: ICategory[] = [];
  // last item in category
  lastCat!: ICategory;
  //product img
  proImg!: string;
  //style for product info
  isOverview!: boolean;
  isSpec!: boolean;
  isReview!: boolean;
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
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy(): void {
    // this.sub.forEach((item) => {
    //   item.unsubscribe();
    // });
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      //fetch product id from url
      let skuId = params.get("skuId");
      if (skuId != null) {
        this.selectedProductID = skuId;
      }
      this._productService.GetProductById(this.selectedProductID).subscribe((data) => {
        this.selectedProduct = data[0];
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
        //product img
        this.proImg = this.selectedProduct.imageThumb;
      });
      // style
      this.isOverview = true;
      this.isSpec = false;
      this.isReview = false;
    });
  }

  //#endregion
  //=============================================================Methods=====================================================
  //#region Methods
  // child to parent communication on click => add to cart file => event emitter fire with data => get child data executed
  addToCartHandler(product: IProduct, count: number) {
    // this.cOutEvent.emit({ product: product, count: count });
  }
  goCatProducts(id: number) {
    this._router.navigate(["/egypt-en/Category", id]);
  }
  showProInfo(ele: any) {
    if (ele.id === "overview") {
      this.isOverview = true;
      this.isSpec = false;
      this.isReview = false;
      console.log(this.isOverview);
      console.log(this.isSpec);
      console.log(this.isReview);
      // ele.classList.add("btn-link", "fw-bold");
    }
    if (ele.id === "spec") {
      this.isOverview = false;
      this.isSpec = true;
      this.isReview = false;
      console.log(this.isOverview);
      console.log(this.isSpec);
      console.log(this.isReview);
    }
    if (ele.id === "review") {
      this.isOverview = false;
      this.isSpec = false;
      this.isReview = true;
      console.log(this.isOverview);
      console.log(this.isSpec);
      console.log(this.isReview);
    }
  }
  goFullSpecDetails() {
    this.isOverview = false;
    this.isSpec = true;
    this.isReview = false;
  }
  //#endregion
}
