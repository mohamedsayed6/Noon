import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersideComponent } from "./userside/userside.component";
import { OrderComponent } from "./order/order.component";
import { AddressComponent } from "./address/address.component";
import { ProfileComponent } from "./profile/profile.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";

export function userHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: userHttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: "ar",
    }),
  ],
  exports: [RouterModule],
})
export class UserModule {}
