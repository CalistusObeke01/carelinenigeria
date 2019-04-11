import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SheaCocoaButterComponent } from './shea-cocoa-butter.component';

const routes: Routes = [
  {
    path: 'products/shea-cocoa-butters',
    component: SheaCocoaButterComponent
  }
];

@NgModule({
  declarations: [SheaCocoaButterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SheaCocoaButterModule { }
