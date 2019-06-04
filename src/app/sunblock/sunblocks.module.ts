import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SunblocksComponent } from './sunblocks.component';

const routes: Routes = [
  {
    path: '',
    component: SunblocksComponent
  }
];

@NgModule({
  declarations: [SunblocksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SunblocksModule { }
