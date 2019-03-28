import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from './category.service';
import { Category } from './ICategory';
@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categories: Category[] = [];
  category: Category;
  errorMessage;

  constructor(private fb: FormBuilder, private categoryservice: CategoryService) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      description: ['']
    });
  }

  saveCategory() {
    this.categoryservice.createCategory(this.category)
      .subscribe(() => `The Category has been saved`,
        (error: any) => this.errorMessage = error
      );
  }

  // getCategory() {
  //   this.categoryservice.getCategories().subscribe((data: any) => {
  //     console.log(data);
  //     this.categories = data;
  //     }, (error) => {
  //       console.log(error);
  //     });
  // }

  onSubmit() {
    console.log(this.categoryForm);
    console.log('Saved: ' + JSON.stringify(this.categoryForm.value));
    alert(`The Categoty has been saved.`);
    this.categoryForm.reset();
  }
}



