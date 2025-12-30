import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './products/products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent , title:'Log In'},
  {path:'products', component:ProductsComponent , title: 'Products' ,canActivate:[authGuard]},
  {path:'**' , component: NotfoundComponent , title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
