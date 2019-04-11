import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { FaceScrubsService } from './face-scrubs.service';

@Component({
  templateUrl: './face-scrubs.component.html',
  styleUrls: ['./face-scrubs.component.css']
})
export class FaceScrubsComponent implements OnInit {
  products: Organics[] = [];
  constructor(private faceScrubsService: FaceScrubsService) { }

  ngOnInit() {
    this.showFaceMasks();
  }
  showFaceMasks() {
    this.faceScrubsService.getFaceScrubs(`scrub`).subscribe(
      (faceScrubProducts: any) => {
        this.products = faceScrubProducts;
      },
      error => console.warn(error)
    );
  }
}
