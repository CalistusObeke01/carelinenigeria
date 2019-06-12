import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SheaCocoaButterComponent } from './shea-cocoa-butter.component';

const routes: Routes = [
  {
    path: '',
    component: SheaCocoaButterComponent,
    data: {
      title: ' - SHEA COCOA BUTTER',
      description: `Two of Nature’s richest known butters – virgin Cocoa butter & unrefined Shea butter
      mixed together to give a sensational blend! Feel your skin softer, supple and naturally glowing.
      Excellent natural skin moisturiser that gives natural chocolate aroma. Apply to face and body to
       nourish skin in depth, enjoying its delicious chocalate scent.`,
      keywords: `SHEA COCOA BUTTER, skin softer, delicious chocalate scent, sunburns, vitamin E,
      B-complex vitamins, vitamin E and B-complex vitamins, sensational blend, fruit's flesh, Shea butter `,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [SheaCocoaButterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SheaCocoaButterModule { }
