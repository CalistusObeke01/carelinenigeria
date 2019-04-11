import { Component, OnInit } from '@angular/core';
import { DeepCleansingStrips } from './deep-cleansing-strips';
import { DeepCleansingStripsService } from './deep-cleansing-strips.service';

@Component({
  templateUrl: './deep-cleansing-strips-list.component.html',
  styleUrls: ['./deep-cleansing-strips-list.component.css']
})
export class DeepCleansingStripsListComponent implements OnInit {
  products: DeepCleansingStrips[] = [];

  constructor(private deepcleansingservice: DeepCleansingStripsService) { }

  ngOnInit() {
    this.getListData();
  }

  getListData() {
    this.deepcleansingservice.getProducts(`deepcleansing`).subscribe((data: any) => {
      console.log(data);
      this.products = data;
      }, (error) => {
        console.log(error);
      });
  }
}
