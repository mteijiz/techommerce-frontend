import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Model/Category/category';
import { CategoryService } from 'src/app/Service/Category/category.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {

  public errorMessage: String;
  public categoryList: Category[];

  constructor(
    private crudCategory: CategoryService
  ) { }

  ngOnInit() {
    this.crudCategory.getAllCategories().subscribe(
      data => {
        console.log('Success ', data);
        this.categoryList = data;
        this.errorMessage = null;
      },
      error => {
        console.log('Error ', error);
        this.errorMessage = error.error.message;
      }
    )
  }

  onClick(category : Category){
    this.crudCategory.updateCategoryState(category).subscribe(
      data=>{
        console.log('Success', data);
        this.ngOnInit();
      },
      error=>{
        console.log('Fail', error);
      }
      
    )
  }

}
