import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Haircare } from './haircare';
import { HaircareService } from './haircare.service';


@Component({
  templateUrl: './haircare-list.component.html',
  styleUrls: ['./haircare-list.component.css']
})
export class HaircareListComponent implements OnInit {
  title = 'Haircare';
  imageWidth = 120;
  imageMargin = 2;
  errorMessage = '';


  ListFilter = '';
  get listFilter(): string {
    return this.ListFilter;
  }
  set listFilter(value: string) {
    this.ListFilter = value;
    this.filteredHaircareProducts = this.listFilter ? this.performFilter(this.listFilter) : this.haircareProducts;
  }

  filteredHaircareProducts: Haircare[] = [];
  haircareProducts: Haircare[] = [];

  constructor(private haircareService: HaircareService) { }

  ngOnInit(): void {
    this.showHaircareProducts();
  }

  showHaircareProducts() {
    this.haircareService.getHaircareProducts(`haircare`).subscribe(
      haircareProducts => {
        this.haircareProducts = haircareProducts;
        this.filteredHaircareProducts = this.performFilter(this.listFilter);
      },
      error => console.warn(error)
    );
  }
  performFilter(filterBy: string): Haircare[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.haircareProducts.filter((product: Haircare) =>
      product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
