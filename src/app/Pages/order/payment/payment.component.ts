import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Core/Services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  addressId:string|null='0'
  constructor(private _orderService:OrderService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  PayCash(){

     this._orderService.PlaceOrder(false,this.addressId!).subscribe();
   console.log("asdasd")

  }




}
