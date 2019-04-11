import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { SheaCocoaButterService } from './shea-cocoa-butter.service';
@Component({
  templateUrl: './shea-cocoa-butter.component.html',
  styleUrls: ['./shea-cocoa-butter.component.css']
})
export class SheaCocoaButterComponent implements OnInit {
  products: Organics[] = [];
  constructor(private sheaCocoaButterService: SheaCocoaButterService) { }

  ngOnInit() {
    this.showSheaButters();
  }
  showSheaButters() {
    this.sheaCocoaButterService.getSheaCocoaButters(`sheaCocoa`).subscribe(
      (sheaCocoaButterProducts: any) => {
        this.products = sheaCocoaButterProducts;
      },
      error => console.warn(error)
    );
  }
}
