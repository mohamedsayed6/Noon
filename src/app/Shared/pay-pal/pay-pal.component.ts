import { Component, OnInit } from "@angular/core";
import { render } from "creditcardpayments/creditCardPayments";
import { CartService } from "src/app/Core/Services/cart.service";

@Component({
  selector: "app-pay-pal",
  templateUrl: "./pay-pal.component.html",
  styleUrls: ["./pay-pal.component.scss"],
})
export class PayPalComponent implements OnInit {


  totalPrice!:number
  constructor(private cartservice:CartService) {
    // debugger;
    render({
      id: "#myPayPAlButton",
      currency: "USD",
      value: "1400",
      onApprove: (details) => {
        alert("Transiction Successfull");
      }
    });

  }

  ngOnInit(): void {

  this.cartservice.GetTotalPrice().subscribe(

    res=>{this.totalPrice=res;
      console.log(this.totalPrice);
    }
  )





  }
}
