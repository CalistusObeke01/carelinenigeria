import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Haircare } from './haircare';
import { HaircareService } from './haircare.service';

@Component({
  selector: 'cn-haircare-detail',
  templateUrl: './haircare-detail.component.html',
  styleUrls: ['./haircare-detail.component.css']
})
export class HaircareDetailComponent implements OnInit {
  pageTitle = 'Haircare Detail';
  haircare: Haircare;
  errorMessage: string;


  constructor(private haircareService: HaircareService,
              private route: ActivatedRoute) { }

  ngOnInit(): void  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.haircareService.getHaircareProduct(id).subscribe(
      haircare => this.onProductRetrieved(haircare),
      error => this.errorMessage = error as any
    );
  }

  onProductRetrieved(haircare: Haircare): void {
    this.haircare = haircare;

    if (this.haircare) {
      this.pageTitle = `Product Detail: ${this.haircare.title}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

}
