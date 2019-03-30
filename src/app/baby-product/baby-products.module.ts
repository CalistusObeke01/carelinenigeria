import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BabyProductsComponent } from './baby-products.component';

const routes: Routes = [
  {
    path: 'products/baby-products',
    component: BabyProductsComponent
  }
];

@NgModule({
  declarations: [BabyProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BabyProductsModule { }
