import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadmoreComponent } from '../readmore.component';
import { ReadmoreChildComponent } from '../readmore-child.component';

@NgModule({
  declarations: [
    ReadmoreComponent,
    ReadmoreChildComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ReadmoreComponent,
    ReadmoreChildComponent
  ]
})
export class SharedModule { }
