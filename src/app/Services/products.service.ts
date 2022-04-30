import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../Models/iproduct";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private httpclient: HttpClient) {}

  GetAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>("http://localhost:3000/Products");
  }

  GetProductsByCategoryId(catid: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/Products/?CategoryId=${catid}`);
  }

  GetProductById(pid: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(`http://localhost:3000/Products/${pid}`); //<== URL Parameter Not Query Parameter
  }
  // <<<<<<< HEAD

  // =======
  // >>>>>>> f8b7900e3370acf05e331232c0043ec04df14ab6
}
