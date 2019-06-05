import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CocoaButterComponent } from './cocoa-butter.component';

const routes: Routes = [
  {
    path: '',
    component: CocoaButterComponent
  }
];

@NgModule({
  declarations: [CocoaButterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CocoaButterModule { }
