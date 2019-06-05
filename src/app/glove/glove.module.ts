import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { GloveComponent } from './glove.component';

const routes: Routes = [
  {
    path: '',
    component: GloveComponent
  }
];

@NgModule({
  declarations: [GloveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GloveModule { }
