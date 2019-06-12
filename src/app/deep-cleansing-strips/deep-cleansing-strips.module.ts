import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { DeepCleansingStripsListComponent } from './deep-cleansing-strips-list.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: DeepCleansingStripsListComponent,
    data: {
      title: ' - DEEP CLEANSING STRIPS',
      description: `Nothing beats nose strips when it comes to deep cleansing and removing
      stubborn blackheads. These strong and highly effective strips are not designed for
      daily use, but for the ultimate depletion of bacteria and skin impurities plus post anti-bacterial
      treatment over the course of 3 applications across 9 days (for full cleanse).`,
      keywords: `NOSE STRIPS, Blackheads, Vitamin A , Bacteria, unclogs pores, purifying agent, 
      Naturally antibacterial, powerful antioxidant, Naturally fragrant, Antioxidants`,
      author: 'Obeke Calistus'
    }
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
