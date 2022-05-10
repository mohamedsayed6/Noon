import { ICategory } from "src/app/Core/Models/icategory";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProduct } from "../../Core/Models/iproduct";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private httpclient: HttpClient) {}

  //#region [Product Services]
  GetAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}` + "/api/Products/GetAll");
  }

  GetProductsByCatCode(catCode: string): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.APIBaseURL}` + `/api/Products/GetProductsByCatCode/${catCode}`
    );
  }

  GetProductById(pid: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(`${environment.APIBaseURL}` + `/api/Products/GetProductById/${pid}`);
  }
  //#endregion

  //#region [Category Services]
  GetAllCategoriesJson(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(`${environment.APIBaseURL}` + "/api/Products/GetAllCategoriesJson");
  }

  GetCategoryPath(catId: number): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(
      `${environment.APIBaseURL}` + `/api/Products/GetCategoryPath?parentCatId=${catId}`
    );
  }
  //#endregion
  //
}
