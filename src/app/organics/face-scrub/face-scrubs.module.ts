import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaceScrubsComponent } from './face-scrubs.component';

const routes: Routes = [
  {
    path: '',
    component: FaceScrubsComponent,
    data: {
      title: ' - FACE SCRUB',
      description: `A gentle, exfoliating face scrub that deeply cleanses and purifies the skin,
      leaving it feeling soft and radiant. Gently removes dead cells & black pore.
      Revive lackluster skin with our refreshing, mild scrub. Real Strawberry Seeds and Cornmeal gently
      buff away dry skin and dulling, dead skin cells—leaving skin softer, smoother, and refreshed.
      The minerals help to promote circulation, reduce the inflammatory response, and act as a
      detoxifying agent and general muscle relaxant.`,
      keywords: `FACE & BODY SCRUB, LEMON SUGAR, SAFFRON FACE SCRUB, GOLD FLAKES FACE SCRUB, Treats Sagging Skin
      , A Facial of Luxury, the most popular Scrub, STRAWBERRY & BERRIES FACE SCRUB, firmness`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [FaceScrubsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FaceScrubsModule { }
