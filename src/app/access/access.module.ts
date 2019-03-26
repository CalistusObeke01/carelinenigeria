import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
    {
      path: 'creating_category',
      component: CategoryComponent
    },
    {
      path: 'creating_product',
      component: ProductComponent
    }
];

@NgModule({
  declarations: [CategoryComponent, ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AccessModule { }
