import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/Core/Services/products.service";
import { IProduct } from "src/app/Core/Models/iproduct";
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs";
import { ICategory } from "src/app/Core/Models/icategory";
import { ICartProduct } from "src/app/Core/Models/icart-product";
import { IwishList } from "src/app/Core/Models/iwish-list-";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  //=============================================================Properties =================================================
  //#region Properties
  //product id

  productId: number = 0;

  selectedProductID!: number;

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

  //Mohamed Changes
  //Array Of ProductsId Quantity
  LocalStorageProducts: ICartProduct[] = [];
  ProductQuantity: number = 1;
  CartProduct: ICartProduct = {
    ID: 0,
    Quantity: 0,
    Name: "",
    NameAr: "",
    ImgURL: "",
    Price: 0,
    TotalPrice: 0,
    Description: "",
    DescrptionAr: "",
  };

  //Kero Changes
  WishListProduct: IwishList = { productId: 0, customerId: "" };
  WishListProductLocalStorge: IwishList[] = [];

  //#endregion
  //===================================================Constructor + Lifecycle Hooks ========================================
  //#region Lifecycle Hooks
  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.isOverview = true;
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy(): void {
    // this.sub.forEach((item) => {
    //   item.unsubscribe();
    // });
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      //fetch product id from url
      // let proId = params.get("pid");
      let proId = params.get("pid");
      if (proId != null) {
        this.selectedProductID = +proId;
      }
      this._productService.GetProductById(this.selectedProductID).subscribe((data) => {
        this.selectedProduct = data;
        this.productId = data.id;
        // maxCountArr == maxQuantityPerOrder
        for (let i = 1; i <= this.selectedProduct.maxQuantityPerOrder; i++) {
          this.maxCountArr.push(i);
        }
        //get product categories
        this.productCategories = [...this.selectedProduct.parentsCategories]; //clone array
        // remove last element from array
        this.productCategories.pop();
        // last Catetory
        this.lastCat = this.selectedProduct.parentsCategories[this.selectedProduct.parentsCategories.length - 1];
        //
        console.log(this.selectedProduct.imagesGallary);
        //==============================================================
        //Mohamed Changes
        //product img
        this.proImg = this.selectedProduct.imageThumb;
        if (localStorage.getItem("wishlist")) {
          this.WishListProductLocalStorge = JSON.parse(localStorage.getItem("wishlist")!);
          this.isInwishlist = this.WishListProductLocalStorge.find((p) => p.productId == this.productId) != null;
        }
      });
    });
  }
  isInwishlist!: boolean;
  //#endregion
  //=============================================================Methods=====================================================
  //#region Methods
  goCatProducts(id: number) {
    this._router.navigate(["/egypt-en/Category", id]);
  }

  showProInfo(ele: any) {
    if (ele.id === "overview") {
      this.isOverview = true;
      this.isSpec = false;
      this.isReview = false;
    }
    if (ele.id === "spec") {
      this.isOverview = false;
      this.isSpec = true;
      this.isReview = false;
    }
    if (ele.id === "review") {
      this.isOverview = false;
      this.isSpec = false;
      this.isReview = true;
    }
  }

  goFullSpecDetails() {
    this.isOverview = false;
    this.isSpec = true;
    this.isReview = false;
  }

  //Mohamed Changes
  //Add Product To LocalStorage/Database
  AddToCart() {
    // alert(this.selectedProduct.skuId);

    if (localStorage.getItem("currentUser")) alert("There's User");
    else {
      this.CartProduct.ID = this.selectedProduct.id;
      this.CartProduct.Quantity = this.ProductQuantity;
      this.CartProduct.Name = this.selectedProduct.name;
      this.CartProduct.NameAr = this.selectedProduct.nameAr;
      this.CartProduct.ImgURL = this.selectedProduct.imageThumb;
      this.CartProduct.Price = this.selectedProduct.price;
      this.CartProduct.TotalPrice = this.CartProduct.Price * this.ProductQuantity;
      this.CartProduct.Description = this.selectedProduct.description;
      this.CartProduct.DescrptionAr = this.selectedProduct.descriptionAr;

      if (localStorage.getItem("LocalStorageProducts")) {
        this.LocalStorageProducts = JSON.parse(localStorage.getItem("LocalStorageProducts")!);

        if (this.LocalStorageProducts.find((p) => p.ID == this.CartProduct.ID)) return;

        this.LocalStorageProducts.push(this.CartProduct);
        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
      } else {
        this.LocalStorageProducts.push(this.CartProduct);

        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));

        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
      }
    }
  }
  //#endregion
  AddToWishList() {
    if (false) alert("There's  User NOt found");
    else {
      this.WishListProduct.productId = this.selectedProduct.id;
      this.WishListProduct.customerId = "u2";
      console.log(this.WishListProduct);
      if (localStorage.getItem("wishlist")) {
        this.WishListProductLocalStorge = JSON.parse(localStorage.getItem("wishlist")!);
        if (this.WishListProductLocalStorge.find((p) => p.productId == this.WishListProduct.productId)) return;

        this.WishListProductLocalStorge.push(this.WishListProduct);
        localStorage.setItem("wishlist", JSON.stringify(this.WishListProductLocalStorge));
        location.reload();
      } else {
        this.WishListProductLocalStorge.push(this.WishListProduct);
        localStorage.setItem("wishlist", JSON.stringify(this.WishListProductLocalStorge));
        location.reload();
      }
    }
  }
  //#endregion
}
