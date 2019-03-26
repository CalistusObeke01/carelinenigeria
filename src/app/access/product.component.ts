import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './IProduct';
@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  products: Product[] = [];

  constructor(private fb: FormBuilder, private productservice: ProductService) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      subtitle: [''],
      price: [''],
      description: ['', Validators.required],
      image_upload: ['', Validators.required],
    });
    this.getProduct();
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
