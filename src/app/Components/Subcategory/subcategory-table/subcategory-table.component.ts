import { Component, OnInit } from '@angular/core';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';

@Component({
  selector: 'app-subcategory-table',
  templateUrl: './subcategory-table.component.html',
  styleUrls: ['./subcategory-table.component.css']
})
export class SubcategoryTableComponent implements OnInit {

  private errorMessage: String;
  private subcategoryList: Subcategory[];
  private stateMessage : String;

  constructor(
    private subcategoryService : SubcategoryService
  ) { }

  ngOnInit() {
    this.getAllSubcategories();
  }

  getAllSubcategories(){
    this.subcategoryService.getAllSubcategories().subscribe(
      data =>{
        this.subcategoryList = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

}
