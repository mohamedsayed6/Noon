import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Core/Models/iproduct';
import { IwishList } from 'src/app/Core/Models/iwish-list-';
import { ProductsService } from 'src/app/Core/Services/products.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(private prodService:ProductsService) { }
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


}

