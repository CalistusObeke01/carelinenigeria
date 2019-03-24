import { Component, OnInit } from '@angular/core';
import { DeepCleansingStrips } from './deep-cleansing-strips';
import { DeepCleansingStripsService } from './deep-cleansing-strips.service';

@Component({
  templateUrl: './deep-cleansing-strips-list.component.html',
  styleUrls: ['./deep-cleansing-strips-list.component.css']
})
export class DeepCleansingStripsListComponent implements OnInit {
  errorMessage = '';
  filteredProducts: DeepCleansingStrips[] = [];

  constructor(private deepcleansingservice: DeepCleansingStripsService) { }

  ngOnInit() {
    console.log('Entered Here');
    this.deepcleansingservice.getProducts(`haircare`).subscribe((data) => {
      console.log(data);
        // this.filteredProducts = products;
      }, (error) => {
        console.log(error);
      });
  }

}
