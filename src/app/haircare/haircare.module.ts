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
        path: '', component: HaircareListComponent, data : { title : 'Haircare Treatment'}
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
