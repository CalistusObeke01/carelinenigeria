import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SunblocksComponent } from './sunblocks.component';

const routes: Routes = [
  {
    path: '',
    component: SunblocksComponent,
    data: {
      title: ' - SUNBLOCK',
      description: `Comprising of the highest quality of transparent UVA/UVB microfilters
      SKINLAB sunscreen provides a lightweight invisible sun block/screen protective layer
      preserving your skin against burn, heat stress and aging.`,
      keywords: `SUNSCREEN, toner, ideal performance, SUNBLOCK, Transparent, UVA protection, UVB protection.`,
      author: 'Obeke Calistus'
    }
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
