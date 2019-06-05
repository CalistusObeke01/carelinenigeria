import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DeepCleansingStripsListComponent } from './deep-cleansing-strips-list.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: DeepCleansingStripsListComponent
  }
];

@NgModule({
  declarations: [DeepCleansingStripsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class DeepCleansingStripsModule { }
