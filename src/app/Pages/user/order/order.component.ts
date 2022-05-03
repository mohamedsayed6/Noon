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
  constructor(private orderservice: OrderService, private route: Router) {}

  ngOnInit(): void {
    this.orderservice.GetAllorders().subscribe((_orders) => {
      this.orderList = _orders;
      console.log(this.orderList);
    });
  }
}
