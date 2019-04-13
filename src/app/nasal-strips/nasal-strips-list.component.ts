import { Component, OnInit } from '@angular/core';
import { NasalStrips } from './nasal-strips';
import { NasalStripsService } from './nasal-strips.service';

@Component({
  templateUrl: './nasal-strips-list.component.html',
  styleUrls: ['./nasal-strips-list.component.css']
})
export class NasalStripsListComponent implements OnInit {
  products: NasalStrips[] = [];
  details: Array<any> = [];
  notice: string;
  constructor(private nasalservice: NasalStripsService) { }

  ngOnInit() {
    this.showProduct();

    this.details = [
      'Helps ease blocked Nose',
      'Comfortable application & easy to remove',
      'Available in sizes for ideal performance',
      'Transparent in texture and elegant in design'
    ];
    this.notice = 'Always wash face and dry before applying.';
  }

  showProduct() {
    this.nasalservice.getProducts(`nasal`).subscribe((data: any) => {
      console.log(data);
      this.products = data;
      }, (error) => {
        console.error(error);
      });
  }
}
