import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../../Core/Models/iproduct";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private httpclient: HttpClient) {}

  GetAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>("http://localhost:3000/Products");
  }

  GetProductsByCategoryId(catid: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/Products/?categoryId=${catid}`);
  }

  GetProductById(pid: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/Products/?id=${pid}`); //<== Query Parameter
    // return this.httpclient.get<IProduct>(`http://localhost:3000/Products/${pid}`); //<== URL Parameter Not Query Parameter
  }
}
