import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { JamaicanCastorOilService } from './jamaican-castor-oil.service';

@Component({
  templateUrl: './jamaican-castor-oil.component.html',
  styleUrls: ['./jamaican-castor-oil.component.css']
})
export class JamaicanCastorOilComponent implements OnInit {
  products: Organics[] = [];
  constructor(private jamaicanCastorOilService: JamaicanCastorOilService) { }

  ngOnInit() {
    this.showFaceMasks();
  }
  showFaceMasks() {
    this.jamaicanCastorOilService.getJamaicanCastorOils(`castor`).subscribe(
      (jamaicanCastorOilProducts: any) => {
        this.products = jamaicanCastorOilProducts;
      },
      error => console.warn(error)
    );
  }
}
