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
      {label: 'SKINLAB', path: '/careline/products/skinlab'},
      {label: 'Hair care', path: '/careline/products/haircare'},
      {label: 'Deep Cleansing Strips',  path: '/careline/products/deep-cleansing-strips'},
      {label: 'Nasal Strips',  path: '/careline/products/nasal-strips'},
      {label: 'Cleansers', path: '/careline/products/cleansers'},
      {label: 'Wax Strips',  path: '/careline/products/wax-strips'},
      {label: 'CC Cream',  path: '/careline/products/cc-cream'},
      {label: 'Sunblock',  path: '/careline/products/sunblock'},
      {label: 'Babyline', path: '/careline/products/babyline'},
      {label: 'Gloves',   path: '/careline/products/glove'}
    ];
  }
}
