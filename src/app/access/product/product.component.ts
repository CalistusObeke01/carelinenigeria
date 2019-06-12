import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from './product.service';
import {Product} from './IProduct';
import {Category} from '../category/ICategory';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  products: Product[] = [];
  categories: Array<Category> = [];
  files: Array<File> = [];
  product: Product;
  isLoading = false;

  constructor(private fb: FormBuilder, private productservice: ProductService, private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService, private router: Router) {
  }

  ngOnInit() {
    this.getAllCategories();
    this.initForm();
  }

  getAllCategories() {
    this.activatedRoute.data.subscribe((data) => {
      this.categories = data.categories;
    });
  }

  createProduct() {
    if (this.files.length === 0) {
      this.toastrService.warning('Please select at least one image');
      return;
    }
    this.isLoading = true;
    this.product = this.productForm.value;
    this.productservice.createProduct(this.product, this.files).pipe(untilDestroyed(this)).subscribe((data) => {
      this.isLoading = false;
      if (data.id) {
        this.productForm.reset();
        this.toastrService.success('Product created successfully');
        this.router.navigateByUrl('/careline/access/all-products');
      } else {
        this.toastrService.error('Error while creating product');
        console.log(data);
      }
    }, (err) => {
      this.isLoading = false;
      this.toastrService.error('Error while creating product');
    });
  }

  getImages($event) {
    this.files = $event;
  }

  initForm() {
    this.productForm = this.fb.group({
      category: [null, [Validators.required]],
      title: ['', Validators.required],
      subTitle: [''],
      price: [''],
      description: ['', Validators.required],
      image_upload: [''],
    });
  }

  ngOnDestroy(): void {
  }
}
