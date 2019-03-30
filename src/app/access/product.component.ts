import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './IProduct';
import { CategoryService } from './category.service';
import { Category } from './ICategory';
@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  products: Product[] = [];
  categories: Array<Category> = [];
  files: Array<File> = [];

  constructor(private fb: FormBuilder, private productservice: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategories();
    this.productForm = this.fb.group({
      category: [null, [Validators.required]],
      title: ['', Validators.required],
      subtitle: [''],
      price: [''],
      description: ['', Validators.required],
      image_upload: ['', Validators.required],
    });
    // this.getProduct();
  }

  getAllCategories() {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  getImages($event) {
    console.log($event);
  }

  getProduct() {
    this.productservice.getProductByCategory(``).subscribe((data: any) => {
      console.log(data);
      this.products = data;
      }, (error) => {
        console.log(error);
      });
  }

  onSubmit() {
    console.log(this.productForm);
    console.log('Saved: ' + JSON.stringify(this.productForm.value));
    alert('The product has been saved.');
    this.productForm.reset();
  }
}
