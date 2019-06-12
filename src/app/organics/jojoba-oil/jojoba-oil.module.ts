import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JojobaOilComponent } from './jojoba-oil.component';

const routes: Routes = [
  {
    path: '',
    component: JojobaOilComponent,
    data: {
      title: ' - VIRGIN JOJOBA OIL',
      description: `Jojoba oil is a liquid wax extracted from the nut of an indigenous
      American shrub that goes by the scientific name Simmondsia chinensis, a misnomer
      as the plant has nothing to do with China. The shrubby tree still grows wild in
      the United States, mainly in the arid regions of the Southwestern states. `,
      keywords: `waxy, Jojoba oil, shrubby tree, vitamin E, B-complex vitamins, vitamin E and B-complex vitamins `,
      author: 'Obeke Calistus'
    }
  }
];


@NgModule({
  declarations: [JojobaOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JojobaOilModule { }
