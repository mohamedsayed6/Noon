import { IAddress } from "./iaddress";

export interface Iuser {
    id:string,
    FirstName:string,
    LastName:string,
    email:string,
    password:string;
    IsActive:boolean,
    Balance:number,
    role:string,
    phone:string,
    Address:IAddress[]
}
