import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HaircareListComponent } from './haircare-list.component';
import { HaircareDetailComponent } from './haircare-detail.component';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: HaircareListComponent,
        data: {
          title: ' - HAIR CARE',
          description: `UNique formular includes whaeat protein, shea butter and keratin to keep the hair
          looking healthy at al times in addition to anti-frizz treatment.
          As coloured hair will loose its colour and turn brassy, yellow and pale during exposure
           to sun, this shampoo will maintain the desired colour for as long as you use it.`,
          keywords: `HAIR CARE, Blackheads, low residual proteins, latex gloves, lipid layer,
          fast fading, shampoo, elegant milk, milk, anti-dandruff, efficacy`,
          author: 'Obeke Calistus'
        }
      },
      {
        path: ':id', component: HaircareDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HaircareListComponent,
    HaircareDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HaircareModule { }
