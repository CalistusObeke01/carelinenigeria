import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = new Date ();
  footerAdress = `Shop B7 Imo plaza tradefair
  complex, Lagos, Nigeria`;
  skinLabProducts: Array<any>  = [];

  constructor() { }

  ngOnInit() {
    this.skinLabProducts = [
      {product: 'Cleaners',  routerLink: 'products/cleanser'},
      {product: 'Wax Strips',  routerLink: 'products/wax-strips'},
      {product: 'Sunblock',  routerLink: 'products/sunblock'},
      {product: 'CC Cream',  routerLink: 'products/cc-cream'},
      {product: 'Haircare',  routerLink: '/products/haircare'},
      {product: 'Deep Cleansing Strips',  routerLink: 'products/deep-cleansing-strips'},
      {product: 'Nasal Strips',  routerLink: 'products/nasal-strips'},
      {product: 'Baby Products', routerLink: 'products/baby-products'},
      {product: 'Gloves', routerLink: 'products/powered-latex-gloves'}
    ];
  }

  fetchYear() {
    return this.year.getFullYear();
  }

  fetchAddress() {
    return `${this.footerAdress}`;
  }

}


