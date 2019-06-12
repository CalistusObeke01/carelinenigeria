import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BabyProductsComponent } from './baby-products.component';

const routes: Routes = [
  {
    path: '',
    component: BabyProductsComponent,
    data: {
      title: ' - BABYLINE',
      description: `CareLine’s rich baby lotion is specially formulated to nourish the
      skin with all the vitamins and minerals the skin needs to restore its natural
      beauty and maintain optimum health.`,
      keywords: 'BABY LOTION, BABY OIL, BABY SHAMPOO, BABY DIAPER RASH CREAM,',
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [BabyProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BabyProductsModule { }
