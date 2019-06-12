import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaceMasksComponent } from './face-masks.component';

const routes: Routes = [
  {
    path: '',
    component: FaceMasksComponent,
    data: {
      title: ' - FACE MASK',
      description: `Collagen masks are clinically proven to rejuvenate aging
      skin and help eliminate unwanted issues such as wrinkles and fine lines.
      This revolutionary product is packed with natural ingredients to give
      you the younger looking skin you have been dreaming about.
      Nutrients Beneficial for the Skin Vitamin A Heals dry, flaky skin.Reduces
      visibility of acne scars and dark spots.Smoothens out aging skin. Vitamin C
      Boosts collagen production.`,
      keywords: `GOLD FLAKES, COLLAGEN FACE MASK, SAFFRON, HONEY & PAPAYA, skin softener
      decreases pigmentation, moisturizes dry skin, Promotes, skin elasticity, firmness`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [FaceMasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FaceMasksModule { }
