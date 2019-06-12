import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  {
    path: '', component: ContactComponent,
    data: {
      title: ' - CONTACT US',
      description: `Carelinenigeria contact page. You can always reach us to order for your products 24/7`,
      keywords: 'contact us',
      author: 'Obeke Calistus'
    }
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
