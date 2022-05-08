import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Core/Models/iproduct';
import { IwishList } from 'src/app/Core/Models/iwish-list-';
import { ProductsService } from 'src/app/Core/Services/products.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

lang:string

  constructor(private prodService:ProductsService) {
    this.lang=localStorage.getItem("lang")!
   }
     wishListProduct:IwishList[]=[]
     ListProduct:IProduct[]=[]

  ngOnInit(): void {
   if(localStorage.getItem("wishlist")){
     this.wishListProduct=JSON.parse(localStorage.getItem("wishlist")!)

      this.prodService.GetAllProducts().subscribe(prods=>{
      this.wishListProduct.forEach((value)=>{
      this.ListProduct.push(prods.find(p=>p.id==value.productId)!)
    })
   })
  }
 
}
deletewishlist(id:number){
  if(localStorage.getItem("wishlist")){
    this.wishListProduct=JSON.parse(localStorage.getItem("wishlist")!)
      localStorage.setItem("wishlist",JSON.stringify(this.wishListProduct.filter(p=>p.productId != id)))
     location.reload()
}
}
}

