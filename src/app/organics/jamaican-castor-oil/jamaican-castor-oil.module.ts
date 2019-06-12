import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JamaicanCastorOilComponent } from './jamaican-castor-oil.component';

const routes: Routes = [
  {
    path: '',
    component: JamaicanCastorOilComponent,
    data: {
      title: ' - JAMAICAN CASTOR OIL',
      description: `Before we look at what Jamaican black castor oil is, let’s first learn about
      castor oil. Castor oil is extracted from the seeds of the castor oil plant, which, when cold
      pressed, is pale yellow and transparent. But Jamaican castor oil is extracted in a different way,
      which is also the traditional method of extraction. `,
      keywords: `SKIN, HAIR, EYEBROW & EYELASH, MAKING, moisturizer, cold-pressed castor `,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [JamaicanCastorOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JamaicanCastorOilModule { }
