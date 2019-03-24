import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.navLinks = [
      {label: 'SKINLAB', path: '/skinlab'},
      {label: 'Hair care', path: '/products/haircare'},
      {label: 'Deep Cleansing Strips',  path: 'products/deep-cleansing-strips'},
      {label: 'Nasal Strips',  path: 'products/nasal-strips'},
      {label: 'Cleaners', path: 'products/cleanser'},
      {label: 'Wax Strips',  path: 'products/wax-strips'},
      {label: 'CC Cream',  path: 'products/cc-cream'},
      {label: 'Sunblock',  path: 'products/sunblock'},
      {label: 'Baby Products', path: 'products/baby-products'},
      {label: 'Gloves',   path: 'products/powered-latex-gloves'}
    ];
  }

}
