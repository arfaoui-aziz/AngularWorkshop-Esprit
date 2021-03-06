import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {AuthGuard } from 'src/app/auth.guard'

const routes: Routes = [
  //pathMatch by default is prefix
  {path:'', redirectTo:'/shop',pathMatch: 'full'},
  //canActivate  routerGuard tells angullar router is it allowed to activate route or no 
  { path: 'login' , component: LoginComponent },
  { path: 'register' , component: RegisterComponent},
  { path: 'shop' , component: ShoppingCartComponent},
  { path: 'shop/:id' , component: ShoppingCartComponent , canActivate: [AuthGuard]},
  
  //General route work when no route matches
  {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  //Register our routes
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // export the entire routerModule so we can import it in app.module.ts
})
export class AppRoutingModule { }
