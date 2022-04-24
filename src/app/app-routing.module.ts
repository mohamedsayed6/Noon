import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';

const routes: Routes = [
  {path:"",redirectTo:'/Noon',pathMatch:'full'},
  {path:"Noon",component:HomeComponent},
  {path:"SignIn",component:SignInComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
