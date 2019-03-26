import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Haircare } from './haircare';
import { HaircareService } from './haircare.service';

@Component({
  templateUrl: './haircare-list.component.html',
  styleUrls: ['./haircare-list.component.css']
})
export class HaircareListComponent implements OnInit {
  pageTitle = 'Haircare Treatment';
  imageWidth = 150;
  imageMargin = 2;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredHaircareProducts = this.listFilter ? this.performFilter(this.listFilter) : this.haircareProducts;
  }

  filteredHaircareProducts: Haircare[] = [];
  haircareProducts: Haircare[] = [];

  constructor(private haircareService: HaircareService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.showHaircareProducts();
  }

  showHaircareProducts() {
    // this.haircareService.getHaircareProducts(`haircare`).subscribe((data: any) => {
    //   console.log(data);
    //   this.products = data;
    //   }, (error) => {
    //     console.log(error);
    //   });

      this.haircareService.getHaircareProducts(`haircare`).subscribe(
        haircareProducts => {
          this.haircareProducts = haircareProducts;
          this.filteredHaircareProducts = this.performFilter(this.listFilter);
        },
        error => this.errorMessage = error as any
      );
  }
  performFilter(filterBy: string): Haircare[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.haircareProducts.filter((product: Haircare) =>
      product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
