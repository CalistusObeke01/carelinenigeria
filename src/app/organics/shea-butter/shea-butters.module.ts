import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SheaButtersComponent } from './shea-butters.component';

const routes: Routes = [
  {
    path: 'products/shea-butters',
    component: SheaButtersComponent
  }
];


@NgModule({
  declarations: [SheaButtersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SheaButtersModule { }
