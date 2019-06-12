import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeaTreeOilComponent } from './tea-tree-oil.component';

const routes: Routes = [
  {
    path: '',
    component: TeaTreeOilComponent,
    data: {
      title: ' - TEA TREE OIL',
      description: `For over seven decades, it’s been documented in numerous medical studies for
       its ability to kiil many strains of bacteria viruses and fungi Do not confuse the tea tree
        with the unrelated common tea plant that is used to make black and green teas.
         The botanical name for tea tree oil is melaleuca alternifolia, tea tree oil was first
          named by captain james cook the explorer who discovered Australia in 1775, `,
      keywords: `SWEET ALMOND OIL, skin softer, delicious chocalate scent, HAIR ROOT HEALTH, vitamin E,
      B-complex vitamins, vitamin E and B-complex vitamins, sensational blend, fruit's flesh,
       tea tree oil’s antibacterial,
      Sweet almond oil, vitamins, BABY EMOLLIENT, non-comedogenic, natural skincare superpower`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [TeaTreeOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeaTreeOilModule { }
