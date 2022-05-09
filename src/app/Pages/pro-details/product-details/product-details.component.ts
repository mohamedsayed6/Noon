import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { IProduct } from 'src/app/Core/Models/iproduct';
import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/Core/Models/icategory';
import { ICartProduct } from 'src/app/Core/Models/icart-product';
import { IwishList } from 'src/app/Core/Models/iwish-list-';
import { CartService } from 'src/app/Core/Services/cart.service';
import { Iuser } from 'src/app/Core/Models/iuser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
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
  //main product image
  mainProImg!: string;
  //img gallery
  proImgs: string[] = [];
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

  //Mohamed Changes=============================>
  //Array Of ProductsId Quantity
  c!:Iuser
  p!:IProduct
  LocalStorageProducts: ICartProduct[] = [];
  ProductQuantity: number = 1;
  CartProduct: ICartProduct={


    quantity:0,
    customer:this.c,
    product:this.p

  }


  //Kero Changes================================>
  WishListProduct: IwishList = { productId: 0, customerId: '' };
  WishListProductLocalStorge: IwishList[] = [];

  //#endregion
  //===================================================Constructor + Lifecycle Hooks ========================================
  //#region Lifecycle Hooks
  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService,
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
      let proId = params.get('pid');
      if (proId != null) {
        this.selectedProductID = +proId;
      }
      this._productService
        .GetProductById(this.selectedProductID)
        .subscribe((data) => {
          this.selectedProduct = data;
          this.productId = data.id;
          //set main product image
          this.mainProImg = this.selectedProduct.imageThumb;
          //push imageThum + all imageName of product image gallery to this.proImgs
          this.proImgs.push(this.selectedProduct.imageThumb);
          this.selectedProduct.imagesGallery.forEach((item) => {
            this.proImgs.push(item.imageName);
          });
          // maxCountArr == maxQuantityPerOrder
          for (let i = 1; i <= this.selectedProduct.maxQuantityPerOrder; i++) {
            this.maxCountArr.push(i);
          }
          //get product categories
          this.productCategories = [...this.selectedProduct.parentsCategories]; //clone array
          // remove last element from array
          this.productCategories.pop();
          // last Catetory
          this.lastCat =
            this.selectedProduct.parentsCategories[
              this.selectedProduct.parentsCategories.length - 1
            ];
          //==============================================================
          //Mohamed Changes
          //product img
          this.proImg = this.selectedProduct.imageThumb;
          if (localStorage.getItem('wishlist')) {
            this.WishListProductLocalStorge = JSON.parse(
              localStorage.getItem('wishlist')!
            );
            this.isInwishlist =
              this.WishListProductLocalStorge.find(
                (p) => p.productId == this.productId
              ) != null;
            console.log(this.isInwishlist);
          }
        });
    });
  }
  isInwishlist!: boolean;
  //#endregion
  //=============================================================Methods=====================================================
  //#region Methods
  goCatProducts(id: number) {
    this._router.navigate(['/egypt-en/Category', id]);
  }

  showProInfo(ele: any) {
    if (ele.id === 'overview') {
      this.isOverview = true;
      this.isSpec = false;
      this.isReview = false;
    }
    if (ele.id === 'spec') {
      this.isOverview = false;
      this.isSpec = true;
      this.isReview = false;
    }
    if (ele.id === 'review') {
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

  changeMainImage(ele: any) {
    // this.mainImg.nativeElement.src = ele.src;
    this.mainProImg = ele.src;
  }
  //=============================================================Mohamed Changes=====================================================
  //Add Product To LocalStorage/Database
  AddToCart() {
    // alert(this.selectedProduct.skuId);

    if (localStorage.getItem('currentUser')) {
      console.log(this.ProductQuantity);
      this._cartService
        .addToCart(this.selectedProduct.id, this.ProductQuantity)
        .subscribe();
    }

    else {
      this.CartProduct.product = this.selectedProduct;
      this.CartProduct.quantity=this.ProductQuantity;

      if (localStorage.getItem('LocalStorageProducts')) {
        this.LocalStorageProducts = JSON.parse(
          localStorage.getItem('LocalStorageProducts')!
        );

        if (this.LocalStorageProducts.find((p) => p.product.id == this.CartProduct.product.id))
          return;

        this.LocalStorageProducts.push(this.CartProduct);
        localStorage.setItem(
          'LocalStorageProducts',
          JSON.stringify(this.LocalStorageProducts)
        );
      } else {
        this.LocalStorageProducts.push(this.CartProduct);

        localStorage.setItem(
          'LocalStorageProducts',
          JSON.stringify(this.LocalStorageProducts)
        );
        localStorage.setItem(
          'LocalStorageProducts',
          JSON.stringify(this.LocalStorageProducts)
        );

        localStorage.setItem(
          'LocalStorageProducts',
          JSON.stringify(this.LocalStorageProducts)
        );
      }
    }
  }

  AddToWishList() {
    if (false) alert("There's  User NOt found");
    else {
      this.WishListProduct.productId = this.selectedProduct.id;
      this.WishListProduct.customerId = 'u2';
      console.log(this.WishListProduct);
      if (localStorage.getItem('wishlist')) {
        this.WishListProductLocalStorge = JSON.parse(
          localStorage.getItem('wishlist')!
        );
        if (
          this.WishListProductLocalStorge.find(
            (p) => p.productId == this.WishListProduct.productId
          )
        )
          return;

        this.WishListProductLocalStorge.push(this.WishListProduct);
        localStorage.setItem(
          'wishlist',
          JSON.stringify(this.WishListProductLocalStorge)
        );
        location.reload();
      } else {
        this.WishListProductLocalStorge.push(this.WishListProduct);
        localStorage.setItem(
          'wishlist',
          JSON.stringify(this.WishListProductLocalStorge)
        );
        location.reload();
      }
    }
  }
  //#endregion
}
