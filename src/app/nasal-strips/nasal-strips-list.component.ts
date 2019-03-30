import { Component, OnInit } from '@angular/core';
import { NasalStrips } from './nasal-strips';
import { NasalStripsService } from './nasal-strips.service';

@Component({
  templateUrl: './nasal-strips-list.component.html',
  styleUrls: ['./nasal-strips-list.component.css']
})
export class NasalStripsListComponent implements OnInit {
  filteredProducts: NasalStrips[] = [];
  details: Array<any> = [];
  constructor(private nasalservice: NasalStripsService) { }

  ngOnInit() {
    this.showProduct();

    this.details = [
      'Helps ease blocked Nose',
      'Comfortable application & easy to remove',
      'Available in sizes for ideal performance',
      'Transparent in texture and elegant in design'
    ];
  }

  showProduct() {
    this.nasalservice.getProducts(`nasal strips`).subscribe(
      products => {
        this.filteredProducts = products;
      },
      error => console.warn(error)
    );
  }
}
