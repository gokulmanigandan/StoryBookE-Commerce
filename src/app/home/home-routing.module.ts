import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from '../category/category/category.component';

const routes: Routes = [
  { path: 'cate', component: CategoryComponent},
  { path: '', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
