import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfumesComponent } from './perfumes.component';

const routes: Routes = [
  {
    path: 'products/perfumes',
    component: PerfumesComponent
  }
];

@NgModule({
  declarations: [PerfumesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PerfumesModule { }
