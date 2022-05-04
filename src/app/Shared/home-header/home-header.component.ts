import { CartService } from "./../../Core/Services/cart.service";
import { RegisterComponent } from "./../register/register.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ICategory } from "src/app/Core/Models/icategory";
import { ISubCategory } from "src/app/Core/Models/ISubCategory";
import { CategoriesServiceService } from "src/app/Core/Services/categories-service.service";
import { SubCategoriesService } from "src/app/Core/Services/SubCategories.service";
import { AuthService } from "src/app/Core/Services/auth.service";

@Component({
  selector: "app-home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.scss"],
})
export class HomeHeaderComponent implements OnInit {
  localstorge: string;
  Categories!: ICategory[];
  SubCategories!: ISubCategory[];
  token!: any;
  constructor(
    private CategoriesService: CategoriesServiceService,
    private SubCategoriesService: SubCategoriesService,
    private router: Router,
    private _dialog: MatDialog,
    private _auth: AuthService,
    private _cartService: CartService
  ) {
    this.localstorge = localStorage.getItem("lang")!;
  }

  ngOnInit(): void {
    this.CategoriesService.GetAllCategories().subscribe((_categories) => {
      this.Categories = _categories;
    });

    this.SubCategoriesService.GetAllSubCategories().subscribe((subcategories) => {
      this.SubCategories = subcategories;
    });
    //get token from localstorage
    this.token = localStorage.getItem("currentUser");
  }

  // map(id: number) {
  //   this.router.navigate([`Category`, id]);
  // }
  // showAllProduct() {
  //   this.router.navigate(["/Noon/AllProducts"]);
  // }
  loclaztion(st: string) {
    localStorage.setItem("lang", st);
    location.reload();
  }
  register() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this._dialog.open(RegisterComponent, dialogConfig);
  }
  logout() {
    this._auth.logout();
    this.router.navigate(["/"]);
    window.location.reload();
  }
  // test Cart
  TTest() {
    this._cartService.getCartItems().subscribe(
      () => {
        console.log("test");
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("test complete");
      }
    );
  }
}
