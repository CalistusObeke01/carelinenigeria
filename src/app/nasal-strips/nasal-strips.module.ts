import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NasalStripsListComponent } from './nasal-strips-list.component';

const routes: Routes = [
  {
    path: 'products/nasal-strips',
    component: NasalStripsListComponent
  }
];

@NgModule({
  declarations: [NasalStripsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NasalStripsModule { }
