import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaceMasksComponent } from './face-masks.component';

const routes: Routes = [
  {
    path: 'products/face-masks',
    component: FaceMasksComponent
  }
];

@NgModule({
  declarations: [FaceMasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FaceMasksModule { }
