import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iorder } from 'src/app/Models/iorder';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

  orderList:Iorder[]=[]
  constructor(private orderservice:OrderService,private route:Router) { }

  ngOnInit(): void {

    this.orderservice.GetAllorders().subscribe(_orders=>{
      this.orderList=_orders.filter(o=>o.returned==true) ;
    
    })
  }

  Approved(id:string){
   
    let order= this.orderList.find(o=>o.id==id)
    order!.returned=false;
    this.orderservice.updateorder(order!).subscribe({
      next:()=>{
        location.reload();
      }
     });
  }

}
