import { Component, OnInit } from '@angular/core';
import { Sunblock } from './ISunblock';
import { SunblocksService } from './sunblocks.service';

@Component({
  templateUrl: './sunblocks.component.html',
  styleUrls: ['./sunblocks.component.css']
})
export class SunblocksComponent implements OnInit {
  products: Sunblock[] = [];
  constructor(private sunblocksService: SunblocksService) { }

  ngOnInit() {
    this.showSunblockProducts();
  }

  showSunblockProducts() {
    this.sunblocksService.getSunblockProducts(`sunblock`).subscribe(
      (sunblocksProducts: any) => {
        this.products = sunblocksProducts;
      },
      error => console.warn(error)
    );
  }
}
