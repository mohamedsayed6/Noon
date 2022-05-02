import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Iuser } from "../../Core/Models/iuser";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private httpoption = {};
  constructor(private httpclient: HttpClient) {
    this.httpoption = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
  }

  GetAllUsers(): Observable<Iuser[]> {
    return this.httpclient.get<Iuser[]>("http://localhost:3000/users");
  }

  GetUserById(uid: number): Observable<Iuser> {
    return this.httpclient.get<Iuser>(`http://localhost:3000/users?id=${uid}`);
  }

  updateuser(user: Iuser): Observable<Iuser> {
    return this.httpclient.put<Iuser>(`http://localhost:3000/users/${user.id}`, JSON.stringify(user), this.httpoption);
  }
}
