import { Component, OnInit } from '@angular/core';
import { BabyProduct } from './IBabyProduct';
import { BabyProductsService } from './baby-products.service';
@Component({
  templateUrl: './baby-products.component.html',
  styleUrls: ['./baby-products.component.css']
})
export class BabyProductsComponent implements OnInit {
  products: BabyProduct[] = [];
  constructor(private babyProductsService: BabyProductsService) { }

  ngOnInit() {
    this.showSunblockProducts();
  }

  showSunblockProducts() {
    this.babyProductsService.getBabyProducts(`babyline`).subscribe(
      (babyProducts: any) => {
        this.products = babyProducts;
      },
      error => console.warn(error)
    );
  }
}
