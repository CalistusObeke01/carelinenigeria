import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SheaButtersComponent } from './shea-butters.component';

const routes: Routes = [
  {
    path: '',
    component: SheaButtersComponent,
    data: {
      title: ' - SHEA BUTTER',
      description: `Extracted from the nut of the African Shea tree, packed in an unrefined
       form, CareLine provides a purely organic natural moisturiser with exceptional healing
        properties for the skin. Rich in Vitamins A, E, F, Shea Butter is impactful for improving
         a number of skin conditions, including blemishes wrinkles, and sunburns,
      and a number of other conditions of the skin in addition to being a superior moisturiser. `,
      keywords: `SHEA BUTTER, blemishes wrinkles, Vitamins A, E, F,, sunburns, vitamin E,
      B-complex vitamins, vitamin E and B-complex vitamins, Shea nut trees, fruit's flesh, Shea butter `,
      author: 'Obeke Calistus'
    }
  }
];


@NgModule({
  declarations: [SheaButtersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SheaButtersModule { }
