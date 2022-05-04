import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProduct } from "../Models/iproduct";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private _api: HttpClient) {}
  //add to cart
  test() {
    return this._api.get(`${environment.APIBaseURL}` + "/Cart/test");
  }
  //get all cart items
  getCartItems(): Observable<IProduct[]> {
    return this._api.get<IProduct[]>(`${environment.APIBaseURL}` + `/Cart/GetAll`);
  }

  // Add to cart
  addToCart(productId: number) {
    return this._api.post(`${environment.APIBaseURL}` + "/Cart/AddToCart", productId);
  }
  //Remove from cart
  removeFromCart(productId: number) {
    return this._api.delete(`${environment.APIBaseURL}` + "/Cart/RemoveFromCart" + productId);
  }
}
