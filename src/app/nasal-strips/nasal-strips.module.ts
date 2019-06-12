import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NasalStripsListComponent } from './nasal-strips-list.component';

const routes: Routes = [
  {
    path: '', component: NasalStripsListComponent,
    data: {
      title: ' - NASAL STRIPS',
      description: `Sleep comfortably in which ever position you desire with Breathe Easy’s
      anti-snoring nasal strips. The healthy drug-free solution to enable a good nights
      sleep without a sound.`,
      keywords: `good nights sleep, ease blocked Nose, ideal performance.`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [NasalStripsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NasalStripsModule { }
