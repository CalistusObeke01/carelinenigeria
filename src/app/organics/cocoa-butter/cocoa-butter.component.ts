import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { CocoaButterService } from './cocoa-butter.service';
@Component({
  templateUrl: './cocoa-butter.component.html',
  styleUrls: ['./cocoa-butter.component.css']
})
export class CocoaButterComponent implements OnInit {
  products: Organics[] = [];
  constructor(private cocoaButterService: CocoaButterService) { }

  ngOnInit() {
    this.showCocoaButters();
  }
  showCocoaButters() {
    this.cocoaButterService.getCocoaButters(`cocoa`).subscribe(
      (cocoaButterProducts: any) => {
        this.products = cocoaButterProducts;
      },
      error => console.warn(error)
    );
  }
}
