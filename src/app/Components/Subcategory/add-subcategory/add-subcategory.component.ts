import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { Category } from 'src/app/Model/Category/category';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  public errorMessage : String;
  public categoryList : Category[];

  constructor(
    private createSubcategoryFormBuilder : FormBuilder,
    private subcategoryService : SubcategoryService,
    private crudCategory: CategoryService
  ) { }

  subcategoryCreateForm = this.createSubcategoryFormBuilder.group({
    subcategoryCode: ['', [Validators.required]],
    subcategoryName: ['', [Validators.required]],
    subcategoryDescription: [''],
    category: ['', [Validators.required]]
  });

  get subcategoryCode(){
    return this.subcategoryCreateForm.get('subcategoryCode');
  }

  get subcategoryName(){
    return this.subcategoryCreateForm.get('subcategoryName');
  }

  get category(){
    return this.category.get('category');
  }

  ngOnInit(){
    this.crudCategory.getAllCategories().subscribe(
      data=>{
        console.log('Success', data);
        this.categoryList = data;
      },
      error=>{
        console.log('Fail', error);
      }
    )
  }

  onSubmit(){
    this.subcategoryService.addSubcategory(this.subcategoryCreateForm.value).subscribe(
      data => {
        console.log('Success', data);
        this.errorMessage = null;
      },
      error => {
        console.log('Fail', error);
        this.errorMessage = error.error.message;
      }
    )
  }

}
