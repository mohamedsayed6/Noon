import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentMethod } from 'src/app/Core/Enums/payment-method';
import { OrderService } from 'src/app/Core/Services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  addressId:string|null='0'
  constructor(private _orderService:OrderService,
              private _activatedRoute: ActivatedRoute,
              private route:Router) {



            }

  ngOnInit(): void {

     this.addressId=this._activatedRoute.snapshot.queryParamMap.get('addressId');


     console.log(this.addressId);


  }


  PayCash(){
    console.log(this.addressId);

     this._orderService.PlaceOrder(PaymentMethod.Cash,this.addressId!).subscribe();
     this.route.navigateByUrl("user/order");


  }


  PayPal(){

  }

}
