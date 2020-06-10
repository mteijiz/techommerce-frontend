import { Component, OnInit } from '@angular/core';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';

@Component({
  selector: 'app-subcategory-table',
  templateUrl: './subcategory-table.component.html',
  styleUrls: ['./subcategory-table.component.css']
})
export class SubcategoryTableComponent implements OnInit {

  public errorMessage: String;
  public subcategoryList: Subcategory[];

  constructor(
    private crudSubcategory : SubcategoryService
  ) { }

  ngOnInit() {
    this.crudSubcategory.getAllsubcategories().subscribe(
      data =>{
        console.log('Success ', data);
        this.subcategoryList = data;
        this.errorMessage = null;
      },
      error => {
        console.log('Error ', error);
        this.errorMessage = error.error.message;
      }
    )
  }

  onClick(subcategory : Subcategory){
    this.crudSubcategory.updateSubcategoryState(subcategory).subscribe(
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
