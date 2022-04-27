import { Component, OnInit } from '@angular/core';
import{render} from 'creditcardpayments/creditCardPayments'

@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.scss']
})
export class PayPalComponent implements OnInit {

  constructor() {

debugger
    render({id:"#myPayPAlButton",
            currency:"EGP",
            value:"1500.00",
            onApprove:(details) =>{
             alert("Transiction Successfull")
            }
            })

   }

  ngOnInit(): void {
  }

}
