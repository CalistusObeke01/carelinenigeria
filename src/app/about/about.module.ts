import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IconsModule } from 'angular-bootstrap-md';

import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: 'about',
    component:  AboutComponent
  }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule
  ]
})
export class AboutModule { }
