import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CcCreamsComponent } from './cc-creams.component';

const routes: Routes = [
  {
    path: '',
    component: CcCreamsComponent,
    data: {
      title: ' - CC CREAM',
      description: `complete beauty cream that meets all of the skins daily
      needs in addition to providing full sun protection along with advance beautifying properties.`,
      keywords: 'SKINLAB, CREAM, COLOUR CARE, COLOUR CORRECTION, SUN PROTECTION, 8 IN 1, BEAUTY',
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [CcCreamsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CcCreamsModule { }
