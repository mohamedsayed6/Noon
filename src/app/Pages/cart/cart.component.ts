import { Component, OnInit } from '@angular/core';
import { ICartProduct } from 'src/app/Core/Models/icart-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  LocalStorageProducts:ICartProduct[]=[]
  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem("currentUser"))
    {}
    else{
    if (localStorage.getItem('LocalStorageProducts')) {
      this.LocalStorageProducts = JSON.parse(localStorage.getItem('LocalStorageProducts')!);
    }
  }

  }

  Remove(ProductID:number)
  {
    if(localStorage.getItem("currentUser")){}
    else{
    localStorage.setItem('LocalStorageProducts', JSON.stringify(this.LocalStorageProducts.filter(p=>p.ID!=ProductID)));
    }
    window.location.reload();
  }

}
