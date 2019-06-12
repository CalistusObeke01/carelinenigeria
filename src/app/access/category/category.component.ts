import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from './category.service';
import {Category} from './ICategory';

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
              private router: Router) { }

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
          setTimeout(() => {
            this.router.navigateByUrl('/careline/access/categories');
          }, 5000);
        }
        this.isLoading = false;
      }, (error: any) => {
        this.errorMessage = error;
        this.isLoading = false;
       });
  }

}



