import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../ICategory';
import {ActivatedRoute} from '@angular/router';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {CategoryService} from '../category.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'cn-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  categories: Array<Category> = [];

  constructor(private activatedRoute: ActivatedRoute, private categoryservice: CategoryService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryservice.getCategories().pipe(untilDestroyed(this)).subscribe((res) => {
      this.categories = res;
    });
  }

  delete(cat) {
    this.categoryservice.deleteCategory(cat.id).pipe(untilDestroyed(this)).subscribe((res) => {
      if (res === 'OK') {
        this.getAllCategories();
      } else {
        this.toastr.error('Error deleting category');
      }
    });
  }

  ngOnDestroy(): void {
  }

}
