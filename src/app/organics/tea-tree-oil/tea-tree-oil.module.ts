import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeaTreeOilComponent } from './tea-tree-oil.component';

const routes: Routes = [
  {
    path: 'products/tea-tree-oil',
    component: TeaTreeOilComponent
  }
];

@NgModule({
  declarations: [TeaTreeOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeaTreeOilModule { }
