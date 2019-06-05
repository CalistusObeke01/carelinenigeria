import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CcCreamsComponent } from './cc-creams.component';

const routes: Routes = [
  {
    path: '',
    component: CcCreamsComponent
  }
];

@NgModule({
  declarations: [CcCreamsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CcCreamsModule { }
