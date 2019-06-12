import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  CardsFreeModule, CarouselModule, ButtonsModule, IconsModule, WavesModule } from 'angular-bootstrap-md';
import { TestimonialComponent } from './testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialComponent,
    data: {
      title: ' - TESTIMONIALS',
      description: `Testimonials from Carelinenigeria`,
      keywords: `Excellent, lovely, great, testimonials, awesome`,
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [TestimonialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonsModule,
    IconsModule,
    WavesModule,
    CardsFreeModule,
    CarouselModule
  ]
})
export class TestimonialModule { }
