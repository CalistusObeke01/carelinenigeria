import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CleansersComponent } from './cleansers.component';

const routes: Routes = [
  {
    path: '',
    component: CleansersComponent,
    data: {
      title: ' - CLEANSER',
      description: `Our face is constantly exposed to polluting agents and dust in the enviroment.
      A gentle yet deep cleanse will maintain healthy and beautiful skin. Removes make-up, dead skin cells,`,
      keywords: 'beautiful skin, oil control, skin sensitive, deep clean, dry skin, remove dead cells, BEAUTY',
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [CleansersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CleansersModule { }
