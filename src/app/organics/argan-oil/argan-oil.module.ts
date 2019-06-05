import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArganOilComponent } from './argan-oil.component';

const routes: Routes = [
  {
    path: '',
    component: ArganOilComponent
  }
];

@NgModule({
  declarations: [ArganOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArganOilModule { }
