import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { IwishList } from "src/app/Core/Models/iwish-list-";
import { ProductsService } from "src/app/Core/Services/products.service";
import { WishListService } from "src/app/Core/Services/wish-list.service";
@Component({
  selector: "app-wish-list",
  templateUrl: "./wish-list.component.html",
  styleUrls: ["./wish-list.component.scss"],
})
export class WishListComponent implements OnInit {
  lang: string;

  constructor(private prodService: ProductsService, private wishService: WishListService, private _route: Router) {
    this.lang = localStorage.getItem("lang")!;
  }
  ListProduct!: IwishList[];
  ngOnInit(): void {
    if (localStorage.getItem("currentUser")) {
      this.wishService.getWishListItems().subscribe((Wishlistproducts) => {
        this.ListProduct = Wishlistproducts;
        console.log(this.ListProduct);
      });
    }
  }
  deletewishlist(id: number) {
    if (localStorage.getItem("currentUser")) {
      this.wishService.removeFromWishList(id).subscribe(() => {
        this.wishService.getWishListItems().subscribe((Wishlistproducts) => {
          this.ListProduct = Wishlistproducts;
          this._route.navigate(["/egypt-en"]);
          this._route.navigate(["/egypt-en/cart"]);
        });
        location.reload();
      });
    }
  }
}
