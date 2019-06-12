import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { GloveComponent } from './glove.component';

const routes: Routes = [
  {
    path: '',
    component: GloveComponent,
    data: {
      title: ' - GLOVE',
      description: `Finest quality latex gloves with low residual proteins for exceptional
      user comfort. Lightly textured finger and palm area provides enhanced grip.`,
      keywords: `Beaded cuffs, Blackheads, low residual proteins, latex gloves`,
      author: 'Obeke Calistus'
    }
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
