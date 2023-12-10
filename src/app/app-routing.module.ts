import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: ()=> import('./home/home.module').then(h => h.HomeModule)},

  { path: 'home', loadChildren: ()=> import('./home/home.module').then(h => h.HomeModule)},

  { path: 'category', loadChildren: ()=> import('./category/category.module').then(h => h.CategoryModule)},

  { path: 'about', loadChildren: ()=> import('./about/about.module').then(h => h.AboutModule)},

  { path: 'contact', loadChildren: ()=> import('./contact/contact.module').then(h => h.ContactModule)},

  { path: 'cart', loadChildren: ()=> import('./cart/cart.module').then(h => h.CartModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
