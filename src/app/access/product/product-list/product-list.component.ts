import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {Product} from '../IProduct';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {Paging} from '../../../core/paging';

@Component({
  selector: 'cn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Array<Product> = [];
  paging = new Paging();

  constructor(private productService: ProductService, private loadingBar: SlimLoadingBarService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loadingBar.start();
    this.productService.getAllProducts(this.paging).pipe(untilDestroyed(this)).subscribe((res: any) => {
      this.loadingBar.complete();
      if (res.content) {
        this.products = res.content;
      }
    }, (err) => {
      this.loadingBar.complete();
    });
  }

  ngOnDestroy(): void {
  }
}
