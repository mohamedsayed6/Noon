import { HttpErrorResponse } from '@angular/common/http';
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

     this._orderService.PlaceOrder(PaymentMethod.Cash,this.addressId!).subscribe(
     res=>{this.route.navigateByUrl("user/order");},
      (err:HttpErrorResponse)=>{
        alert("Error happened while proccessing your order, please try again")
      }
     );



  }


  NoonBalance()
  {
    this._orderService.PlaceOrder(PaymentMethod.NoonBalance,this.addressId!).subscribe( res=>{this.route.navigateByUrl("user/order");},
    (err:HttpErrorResponse)=>{
      alert("Error happened while proccessing your order, please check your balance and try again ")
    });


  }


  PayPal(){

    this.route.navigateByUrl("/PayPal/"+this.addressId!)


  }

}
