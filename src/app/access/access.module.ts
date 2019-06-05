import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {CategoryResolver} from '../core/category.resolver';
import {IndexComponent} from '../public/index/index.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {
        path: 'creating_category', component: CategoryComponent
      },
      {path: 'creating_product', component: ProductComponent
      },
      {path: 'all-products', component: ProductListComponent},
      {path: 'categories', component: CategoryListComponent, resolve: {
          categories: CategoryResolver
        }}
    ]}
];

@NgModule({
  declarations: [CategoryComponent, ProductComponent, CategoryListComponent, ProductListComponent],
  exports: [CategoryComponent, ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    RouterModule.forChild(routes),
  ]
})
export class AccessModule { }


