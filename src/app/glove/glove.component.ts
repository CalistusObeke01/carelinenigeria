import { Component, OnInit } from '@angular/core';
import { Glove } from './IGlove';
import { GloveService } from './glove.service';

@Component({
  templateUrl: './glove.component.html',
  styleUrls: ['./glove.component.css']
})
export class GloveComponent implements OnInit {
  products: Glove[] = [];
  constructor(private gloveService: GloveService) { }

  ngOnInit() {
    this.showGloveProducts();
  }

  showGloveProducts() {
    this.gloveService.getGloveProducts(`glove`).subscribe(
      (gloveProducts: any) => {
        this.products = gloveProducts;
      },
      error => console.warn(error)
    );
  }
}
