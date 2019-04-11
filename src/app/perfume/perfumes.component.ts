import { Component, OnInit } from '@angular/core';
import { Perfume } from './IPerfume';
import { PerfumesService } from './perfumes.service';
@Component({
  templateUrl: './perfumes.component.html',
  styleUrls: ['./perfumes.component.css']
})
export class PerfumesComponent implements OnInit {
  products: Perfume[] = [];
  constructor(private  perfumesService: PerfumesService) { }

  ngOnInit() {
    this.showPerfumes();
  }
  showPerfumes() {
    this.perfumesService.getPerfumes(`babyline`).subscribe(
      (perfumeProducts: any) => {
        this.products = perfumeProducts;
      },
      error => console.warn(error)
    );
  }
}
