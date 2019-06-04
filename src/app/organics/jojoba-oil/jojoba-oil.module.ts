import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JojobaOilComponent } from './jojoba-oil.component';

const routes: Routes = [
  {
    path: '',
    component: JojobaOilComponent
  }
];


@NgModule({
  declarations: [JojobaOilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JojobaOilModule { }
