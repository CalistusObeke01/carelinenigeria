import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {CategoryResolver} from '../core/category.resolver';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

const routes: Routes = [
  {
    path: 'creating_category',
    component: CategoryComponent,
    data: {title: 'Creating Categories - Carelinenigeria'}
  },
  {
    path: 'creating_product',
    component: ProductComponent,
    data: {title: 'Creating Products - Carelinenigeria'}
  },
  {
    path: 'all-products',
    component: ProductListComponent,
    data: {title: 'All Products - Carelinenigeria'}
  },
  {
    path: 'categories',
    component: CategoryListComponent,
    resolve: {
      categories: CategoryResolver
    },
    data: {title: 'All Categories - Carelinenigeria'}
  }
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


