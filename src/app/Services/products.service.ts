import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { }


  GetAllProducts():Observable<IProduct[]>
  {


 return this.httpclient.get<IProduct[]>("http://localhost:3000/Products");

  }

  GetProductsByCategoryId(catid:number):Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/Products/?CategoryId=${catid}`);

  }


}
