import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { TeaTreeOilService } from './tea-tree-oil.service';

@Component({
  templateUrl: './tea-tree-oil.component.html',
  styleUrls: ['./tea-tree-oil.component.css']
})

export class TeaTreeOilComponent implements OnInit {
  products: Organics[] = [];
  constructor(private teaTreeOilService: TeaTreeOilService) { }

  ngOnInit() {
    this.showTeaTreeOils();
  }

  showTeaTreeOils() {
    this.teaTreeOilService.getTeaTreeOils(`teaTree`).subscribe(
      (teaTreeOilProducts: any) => {
        this.products = teaTreeOilProducts;
      },
      error => console.warn(error)
    );
  }
}
