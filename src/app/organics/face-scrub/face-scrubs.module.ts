import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaceScrubsComponent } from './face-scrubs.component';

const routes: Routes = [
  {
    path: 'products/face-scrubs',
    component: FaceScrubsComponent
  }
];

@NgModule({
  declarations: [FaceScrubsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FaceScrubsModule { }
