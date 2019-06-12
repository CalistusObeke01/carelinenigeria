import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArganOilComponent } from './argan-oil.component';

const routes: Routes = [
  {
    path: '',
    component: ArganOilComponent,
    data: {
      title: ' - AGRAN OIL',
      description: `Argan Oil that smells like absolutely nothing might be suspicious, too.
      It could be entirely fake, or at least diluted beyond olfactory recognition. Or, it could
      be machine-made and possibly even put through a "deodorization" process.`,
      keywords: `deodorization, hydration of your skin , diluted beyond olfactory recognition`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [ArganOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArganOilModule { }
