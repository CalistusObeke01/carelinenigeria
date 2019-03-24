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
  productName: string;

  constructor(private haircareService: HaircareService, private route: ActivatedRoute) { }


  ngOnInit(): void  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);

    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('productName'));
    //   this.productName = params.get('productName');
    // });
  }

  // getHaircareProductName(productName: string) {
  //   this.haircareService.getHaircareProductName(productName).subscribe(
  //     haircare => this.onProductRetrieved(haircare),
  //     error => this.errorMessage = error as any
  //   );
  // }

  getProduct(id: number) {
    this.haircareService.getHaircareProduct(id).subscribe(
      haircare => this.onProductRetrieved(haircare),
      error => this.errorMessage = error as any
    );
  }

  onProductRetrieved(haircare: Haircare): void {
    this.haircare = haircare;

    if (this.haircare) {
      this.pageTitle = `Product Detail: ${this.haircare.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

}
