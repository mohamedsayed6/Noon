import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartProduct } from 'src/app/Core/Models/icart-product';
import { IProduct } from 'src/app/Core/Models/iproduct';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  lang:string="en";
  LocalStorageProducts:ICartProduct[]=[]

  constructor(private _cartService:CartService,private route:Router) {

   this.lang=localStorage.getItem("lang")!

   }

  ngOnInit(): void {

    if(localStorage.getItem("currentUser"))
    {

      this._cartService.getCartItems().subscribe(
        prod=>this.LocalStorageProducts=prod
      );

    }
    else{
    if (localStorage.getItem('LocalStorageProducts')) {
      this.LocalStorageProducts = JSON.parse(localStorage.getItem('LocalStorageProducts')!);
    }
  }

  }

  Remove(ProductID:number)
  {
    if(localStorage.getItem("currentUser")){

    this._cartService.removeFromCart(ProductID).subscribe(
    result=>{

      setTimeout(()=>{window.location.reload();
      console.log("asdasffsfsafugdsfgdggf")},5000)
      }
    );


    }

    else{

      localStorage.setItem('LocalStorageProducts',
       JSON.stringify(this.LocalStorageProducts.filter(p=>p.product.id!=ProductID)));
    }
    window.location.reload();
  }


  CheckOut()
  {
    console.log("Hamada");
    this.route.navigateByUrl("egypt-en/cart/order");
  }

}
