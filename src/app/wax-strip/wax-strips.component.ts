import { Component, OnInit } from '@angular/core';
import { Waxstrip } from './IWaxstrip';
import { WaxStripsService } from './wax-strips.service';

@Component({
  templateUrl: './wax-strips.component.html',
  styleUrls: ['./wax-strips.component.css']
})
export class WaxStripsComponent implements OnInit {
  products: Waxstrip[] = [];
  constructor(private waxStripsService: WaxStripsService) { }

  ngOnInit() {
    this.showWaxstripProducts();
  }

  showWaxstripProducts() {
    this.waxStripsService.getWaxstripsProducts(`wax strips`).subscribe(
      (waxstripsProducts: any) => {
        this.products = waxstripsProducts;
      },
      error => console.warn(error)
    );
  }

}
