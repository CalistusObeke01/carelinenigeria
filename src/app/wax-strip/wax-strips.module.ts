import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WaxStripsComponent } from './wax-strips.component';

const routes: Routes = [
  {
    path: 'products/wax-strips',
    component: WaxStripsComponent
  }
];

@NgModule({
  declarations: [WaxStripsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WaxStripsModule { }
