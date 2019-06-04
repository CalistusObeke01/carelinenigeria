import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CleansersComponent } from './cleansers.component';

const routes: Routes = [
  {
    path: '',
    component: CleansersComponent
  }
];

@NgModule({
  declarations: [CleansersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CleansersModule { }
