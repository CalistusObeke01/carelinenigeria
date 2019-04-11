import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JamaicanCastorOilComponent } from './jamaican-castor-oil.component';

const routes: Routes = [
  {
    path: 'products/jamaican-castor-oil',
    component: JamaicanCastorOilComponent
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
