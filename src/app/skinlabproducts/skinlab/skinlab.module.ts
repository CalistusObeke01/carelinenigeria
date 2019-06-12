import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkinlabComponent } from './skinlab.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SkinlabComponent,
    data: {
      title: ' - SKINLAB',
      description: `Cleanse your face with warm water to open the pores and
      clean away dirt. Opening the pores allows the cream or oils to penetrate the skin more effectively.
      You can apply a toner afterwards if you use one.`,
      keywords: `BRIGHT ROUTINE, toner, ideal performance, effectively, skin whitening product, whitening.`,
      author: 'Obeke Calistus'
    }
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
