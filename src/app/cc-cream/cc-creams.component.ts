import { Component, OnInit } from '@angular/core';
import { CcCream } from './ICream';
import { CcCreamsService } from './cc-creams.service';

@Component({
  templateUrl: './cc-creams.component.html',
  styleUrls: ['./cc-creams.component.css']
})
export class CcCreamsComponent implements OnInit {
  products: CcCream[] = [];
  constructor(private ccCreamsService: CcCreamsService) { }

  ngOnInit() {
    this.showCcCreamsProducts();
  }


  showCcCreamsProducts() {
    this.ccCreamsService.getCcCreamsProducts(`cccream`).subscribe(
      (ccCreamProducts: any) => {
        this.products = ccCreamProducts;
      },
      error => console.warn(error)
    );
  }

}
