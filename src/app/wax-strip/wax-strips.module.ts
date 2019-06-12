import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WaxStripsComponent } from './wax-strips.component';

const routes: Routes = [
  {
    path: '',
    component: WaxStripsComponent,
    data: {
      title: ' - WAXS STRIPS',
      description: `StripSlow™ Hair Growth Inhibitor Cream is a true natural
      hair inhibitor applied post to epilation to stop unwanted hair growth.
      It can slow down hair growth 3x the
      normal rate if used after shaving or depilation.`,
      keywords: `STRIPSLOW™, Hair, Growth, Inhibitor Cream, natural hair inhibitor system, male pattern baldness`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [WaxStripsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WaxStripsModule { }
