import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment.prod";
import { Iuser } from "../../Core/Models/iuser";
import { IAddress } from "../Models/iaddress";

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

 
 
 deleteAddress(address: IAddress){
  return this.httpclient.post<IAddress>(`${environment.APIBaseURL}/users/DeleteAddress`, JSON.stringify(address));
 }
  
  addAddress(address: IAddress): Observable<IAddress> {
    return this.httpclient.post<IAddress>(`${environment.APIBaseURL}/users/AddAddress`, JSON.stringify(address));
  }
  UpdateAddress(address: IAddress): Observable<IAddress> {
    return this.httpclient.put<IAddress>(`${environment.APIBaseURL}/users/UpdateAddress`, JSON.stringify(address));
  }
  ChangeAddress(address: IAddress[]): Observable<IAddress[]> {
    return this.httpclient.put<IAddress[]>(`${environment.APIBaseURL}/users/ChangeAddress`, JSON.stringify(address));
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
