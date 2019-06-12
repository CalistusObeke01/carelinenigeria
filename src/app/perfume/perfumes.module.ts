import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfumesComponent } from './perfumes.component';

const routes: Routes = [
  {
    path: '',
    component: PerfumesComponent,
    data: {
      title: ' - PERFUMES',
      description: ``,
      keywords: ``,
      author: 'Obeke Calistus'
    }
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
