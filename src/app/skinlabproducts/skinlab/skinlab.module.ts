import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkinlabComponent } from './skinlab.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'skinlab',
    component: SkinlabComponent
  }
];

@NgModule({
  declarations: [
    SkinlabComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SkinlabModule { }
