import { SharedModule } from "./Shared/shared.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartComponent } from "./Pages/cart/cart.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeModule } from "./Pages/home/home.module";
import { UserModule } from "./Pages/user/user.module";
import { ProDetailsModule } from "./Pages/pro-details/pro-details.module";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HomeModule,
    UserModule,
    ProDetailsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: "en",
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [SignInComponent],
})
export class AppModule {}
