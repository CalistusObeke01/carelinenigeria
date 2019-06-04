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
      {product: 'Cleansers',  routerLink: '/careline/products/cleansers'},
      {product: 'Wax Strips',  routerLink: '/careline/products/wax-strips'},
      {product: 'Sunblock',  routerLink: '/careline/products/sunblock'},
      {product: 'CC Cream',  routerLink: '/careline/products/cc-cream'},
      {product: 'Haircare',  routerLink: '/careline/products/haircare'},
      {product: 'Deep Cleansing Strips',  routerLink: '/careline/products/deep-cleansing-strips'},
      {product: 'Nasal Strips',  routerLink: '/careline/products/nasal-strips'},
      {product: 'Babyline', routerLink: '/careline/products/babyline'},
      {product: 'Gloves', routerLink: '/careline/products/powered-latex-gloves'}
    ];
  }

  fetchYear() {
    return this.year.getFullYear();
  }

  fetchAddress() {
    return `${this.footerAdress}`;
  }

}


