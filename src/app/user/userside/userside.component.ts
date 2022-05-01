import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-userside",
  templateUrl: "./userside.component.html",
  styleUrls: ["./userside.component.scss"],
})
export class UsersideComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.use(localStorage.getItem("lang")!);
  }
}
