import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iorder } from "../../Core/Models/iorder";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private httpoption = {};
  constructor(private httpclient: HttpClient) {
    this.httpoption = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
  }

  GetAllorders(): Observable<Iorder[]> {
    return this.httpclient.get<Iorder[]>("http://localhost:3000/orders");
  }

  GetorderById(oid: number): Observable<Iorder> {
    return this.httpclient.get<Iorder>(`http://localhost:3000/orders?id=${oid}`);
  }

  updateorder(order: Iorder): Observable<Iorder> {
    return this.httpclient.put<Iorder>(
      `http://localhost:3000/orders/${order.id}`,
      JSON.stringify(order),
      this.httpoption
    );
  }
}
