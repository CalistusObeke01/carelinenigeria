import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { SweetAlmondOilService } from './sweet-almond-oil.service';
@Component({
  templateUrl: './sweet-almond-oil.component.html',
  styleUrls: ['./sweet-almond-oil.component.css']
})
export class SweetAlmondOilComponent implements OnInit {
  products: Organics[] = [];
  constructor(private sweetAlmondOilService: SweetAlmondOilService) { }

  ngOnInit() {
    this.showSweetAlmondOils();
  }
  showSweetAlmondOils() {
    this.sweetAlmondOilService.getSweetAlmondOils(`almond`).subscribe(
      (sweetAlmondOilProducts: any) => {
        this.products = sweetAlmondOilProducts;
      },
      error => console.warn(error)
    );
  }
}
