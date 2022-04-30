// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { UserRoutingRoutingModule } from './user-routing-routing.module';
// import { UsersideComponent } from '../userside/userside.component';
// import { ProfileComponent } from '../profile/profile.component';

// import { AddressComponent } from '../address/address.component';

// import { OrderComponent } from '../order/order.component';
// import { ReturnComponent } from '../return/return.component';

// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import {TranslateModule} from '@ngx-translate/core';
// import { HttpClient } from '@angular/common/http';

// export function userHttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http,'./assets/i18n/','.json');
// }

// @NgModule({
//   declarations: [
//     UsersideComponent,
//     ProfileComponent,
//  OrderComponent,
// AddressComponent,
// ReturnComponent
// ],
//   imports: [
//     CommonModule,
//     UserRoutingRoutingModule,
//     TranslateModule.forChild({
//       loader: {
//       provide: TranslateModule,
//       useFactory: userHttpLoaderFactory,
//       deps: [HttpClient]
//   },
//   defaultLanguage:"en"} )
//   ],

// })
// export class UserRoutingModule { }
