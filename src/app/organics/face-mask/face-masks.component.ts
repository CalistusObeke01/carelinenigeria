import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { FaceMasksService } from './face-masks.service';

@Component({
  templateUrl: './face-masks.component.html',
  styleUrls: ['./face-masks.component.css']
})
export class FaceMasksComponent implements OnInit {
  products: Organics[] = [];
  constructor(private faceMasksService: FaceMasksService) { }

  ngOnInit() {
    this.showFaceMasks();
  }
  showFaceMasks() {
    this.faceMasksService.getFaceMasks(`mask`).subscribe(
      (arganOilProducts: any) => {
        this.products = arganOilProducts;
      },
      error => console.warn(error)
    );
  }
}
