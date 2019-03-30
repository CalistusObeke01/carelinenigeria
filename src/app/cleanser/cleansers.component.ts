import { Component, OnInit } from '@angular/core';
import {  Creanser } from './ICleanser';
import { CleansersService } from './cleansers.service';
@Component({
  templateUrl: './cleansers.component.html',
  styleUrls: ['./cleansers.component.css']
})
export class CleansersComponent implements OnInit {
  products: Creanser[] = [];
  constructor(private cleansersService: CleansersService) { }

  ngOnInit() {
    this.showCleansersProducts();
  }

  showCleansersProducts() {
    this.cleansersService.getCleansersProducts(`cleansers`).subscribe(
      (waxstripsProducts: any) => {
        this.products = waxstripsProducts;
      },
      error => console.warn(error)
    );
  }
}
