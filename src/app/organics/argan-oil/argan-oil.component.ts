import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { ArganOilService } from './argan-oil.service';

@Component({
  templateUrl: './argan-oil.component.html',
  styleUrls: ['./argan-oil.component.css']
})
export class ArganOilComponent implements OnInit {
  products: Organics[] = [];
  constructor(private arganOilService: ArganOilService) { }

  ngOnInit() {
    this.showArganOils();
  }
  showArganOils() {
    this.arganOilService.getArganOils(`argan`).subscribe(
      (arganOilProducts: any) => {
        this.products = arganOilProducts;
      },
      error => console.warn(error)
    );
  }
}
