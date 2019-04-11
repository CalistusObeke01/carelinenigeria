import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { SheaButtersService } from './shea-butters.service';
@Component({
  templateUrl: './shea-butters.component.html',
  styleUrls: ['./shea-butters.component.css']
})
export class SheaButtersComponent implements OnInit {
  products: Organics[] = [];
  constructor(private sheaButtersService: SheaButtersService) { }

  ngOnInit() {
    this.showSheaButters();
  }
  showSheaButters() {
    this.sheaButtersService.getSheaButters(`shea`).subscribe(
      (sheaButterProducts: any) => {
        this.products = sheaButterProducts;
      },
      error => console.warn(error)
    );
  }
}
