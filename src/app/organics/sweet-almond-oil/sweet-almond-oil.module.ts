import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SweetAlmondOilComponent } from './sweet-almond-oil.component';

const routes: Routes = [
  {
    path: '',
    component: SweetAlmondOilComponent,
    data: {
      title: ' - SWEET ALMOND OIL',
      description: `Sweet almond oil is rich in vitamin e, monounsaturated fatty acids, proteins,
      potassium and zinc, besides a number of other minerals and vitamins, which explains why it
       is so good for our heart, skin and hair. HAIR ROOT HEALTH Because it’s packed with these
        vitamins and nutrients, sweet almond oil is a natural skincare superpower`,
      keywords: `SWEET ALMOND OIL, skin softer, delicious chocalate scent, HAIR ROOT HEALTH, vitamin E,
      B-complex vitamins, vitamin E and B-complex vitamins, sensational blend, fruit's flesh, Shea ,
      Sweet almond oil, vitamins, BABY EMOLLIENT, non-comedogenic, natural skincare superpower`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [SweetAlmondOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SweetAlmondOilModule { }
