import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment.prod";
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
    return this.httpclient.get<Iuser[]>(`${environment.APIBaseURL}/users`);
  }
  GetAllAddress(): Observable<Iuser[]> {
    return this.httpclient.get<Iuser[]>(`${environment.APIBaseURL}/users`);
  }

  GetUserById(uid: number): Observable<Iuser> {
    return this.httpclient.get<Iuser>(`${environment.APIBaseURL}/users?id=${uid}`);
  }
  adduser(user: Iuser): Observable<Iuser> {
    return this.httpclient.post<Iuser>(`${environment.APIBaseURL}/users`, JSON.stringify(user), this.httpoption);
  }
  updateuser(user: Iuser): Observable<Iuser> {
    return this.httpclient.put<Iuser>(`${environment.APIBaseURL}/users/${user.id}`, JSON.stringify(user), this.httpoption);
  }
}
