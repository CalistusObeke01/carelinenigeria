import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CocoaButterComponent } from './cocoa-butter.component';

const routes: Routes = [
  {
    path: '',
    component: CocoaButterComponent,
    data: {
      title: ' - COCOA BUTTER',
      description: `Cocoa butter is a wonderful natural emollient moisturiser which is rich in
      vitamins and minerals. It is rich in anti-oxidants and phenomenal dealing with dry,
      chapped and sensitive skins and can be used in both skin preparations and lip balms.`,
      keywords: `anti-oxidants, phenomenal dealing with dry, moisturizing`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [CocoaButterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CocoaButterModule { }
