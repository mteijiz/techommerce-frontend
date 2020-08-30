import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Model/Category/category';
import { CategoryService } from 'src/app/Service/Category/category.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {

  private errorMessage: String;
  private categoryList: Category[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categoryList = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

}
