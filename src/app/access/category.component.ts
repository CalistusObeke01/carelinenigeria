import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from './category.service';
import { Category } from './ICategory';

import { MessagesService } from '../messages/messages.service';
@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categories: Category[] = [];
  category: Category;
  message: string;
  errorMessage: string;
  isLoading = false;

  constructor(private fb: FormBuilder,
              private categoryservice: CategoryService,
              private messageService: MessagesService,
              private router: Router
              ) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      description: ['']
    });
  }

  saveCategory() {
    this.isLoading = true;
    this.category = this.categoryForm.value;
    this.categoryservice.createCategory(this.category).subscribe((data) => {
        if (data.id) {
          this.categoryForm.reset();
          this.message = 'Category created successfully';
        }
        this.isLoading = false;
      }, (error: any) => {
        this.errorMessage = error;
        this.isLoading = false;
       });
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }

    // Navigate back to the Creating Category
    this.router.navigateByUrl('/creating_category');
    // this.categoryForm.reset();
  }

}



