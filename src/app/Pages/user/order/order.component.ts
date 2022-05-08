import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iorder } from "src/app/Core/Models/iorder";
import { OrderService } from "src/app/Core/Services/order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  orderList: Iorder[] = [];
  lang!:string
  constructor(private orderservice: OrderService, private route: Router) {
this.lang=localStorage.getItem("lang")!
  }

  ngOnInit(): void {
    this.orderservice.GetAllorders().subscribe((_orders) => {
      this.orderList = _orders;
      console.log(this.orderList);
    });
  }
}
