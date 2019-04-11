import { Component, OnInit } from '@angular/core';
import { Organics } from '../IOrganic';
import { JojobaOilService } from './jojoba-oil.service';

@Component({
  templateUrl: './jojoba-oil.component.html',
  styleUrls: ['./jojoba-oil.component.css']
})
export class JojobaOilComponent implements OnInit {
  products: Organics[] = [];
  constructor(private jojobaOilService: JojobaOilService) { }

  ngOnInit() {
    this.showJojobaOils();
  }
  showJojobaOils() {
    this.jojobaOilService.getJojobaOils(`jojoba`).subscribe(
      (jojobaOilProducts: any) => {
        this.products = jojobaOilProducts;
      },
      error => console.warn(error)
    );
  }
}
