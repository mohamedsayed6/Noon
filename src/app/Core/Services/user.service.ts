import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Iuser } from "../../Core/Models/iuser";
import { IAddress } from "../Models/iaddress";

import { UserAddress } from "../Models/user-address";


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

 
 
 deleteAddress(address: UserAddress){
  return this.httpclient.post<UserAddress>(`${environment.APIBaseURL}/users/DeleteAddress`, JSON.stringify(address));
 }
  
  addAddress(address: UserAddress): Observable<UserAddress> {
    return this.httpclient.post<UserAddress>(`${environment.APIBaseURL}/users/AddAddress`, JSON.stringify(address));
  }

  UpdateAddress(address: UserAddress): Observable<UserAddress> {
    return this.httpclient.put<UserAddress>(`${environment.APIBaseURL}/users/UpdateAddress`, JSON.stringify(address));

  }

///Mohamed
//Getting User Addresses from Api

  GetAllAddress(): Observable<UserAddress[]> {
    return this.httpclient.get<UserAddress[]>(`${environment.APIBaseURL}/api/User/Addresess`);

  }
  ChangeAddress(address: UserAddress[]): Observable<UserAddress[]> {
    return this.httpclient.put<UserAddress[]>(`${environment.APIBaseURL}/users/ChangeAddress`, JSON.stringify(address));
  }
  obj:any={}
  updatePassword(old_Password:string,new_Password:string) {
    this.obj={oldPassword:old_Password,newPassword:new_Password}
    return this.httpclient.put(`${environment.APIBaseURL}/users/UpdatePassword`,this.obj);
  }
  updateGeneralInfo(first: string,last:string) {
    return this.httpclient.put(`${environment.APIBaseURL}/users/UpdateName?first=${first}&last=${last}`,null);
  }
}
