import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SweetAlmondOilComponent } from './sweet-almond-oil.component';

const routes: Routes = [
  {
    path: 'products/sweet-almond-oil',
    component: SweetAlmondOilComponent
  }
];

@NgModule({
  declarations: [SweetAlmondOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SweetAlmondOilModule { }
