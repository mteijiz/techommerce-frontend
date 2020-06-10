import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { Category } from 'src/app/Model/Category/category';
import { CategoryService } from 'src/app/Service/Category/category.service';

@Component({
  selector: 'app-update-subcategory',
  templateUrl: './update-subcategory.component.html',
  styleUrls: ['./update-subcategory.component.css']
})
export class UpdateSubcategoryComponent implements OnInit {

  public errorMessage : String;
  public subcategory: Subcategory;
  public example = true;
  public categoryList : Category[];

  constructor(
    private updateSubcategoryFormBuilder : FormBuilder,
    private subcategoryService : SubcategoryService,
    private crudCategory : CategoryService
  ) { }

  subcategoryUpdateForm;

  get subcategoryId(){
    return this.subcategoryUpdateForm.get('subcategoryId');
  }

  get subcategoryCode(){
    return this.subcategoryUpdateForm.get('subcategoryCode');
  }

  get subcategoryName(){
    return this.subcategoryUpdateForm.get('subcategoryName');
  }

  get subcategoryDescription(){
    return this.subcategoryUpdateForm.get('subcategoryDescription');
  }
  
  get subcategoryState(){
    return this.subcategoryUpdateForm.get('subcategoryState');
  }

  get category(){
    return this.subcategoryUpdateForm.get('category');
  }

  ngOnInit() {
    this.subcategory = history.state;
    this.subcategoryUpdateForm = this.updateSubcategoryFormBuilder.group({
      subcategoryId: [this.subcategory.subcategoryId, [Validators.required]],
      subcategoryCode: [this.subcategory.subcategoryCode, [Validators.required]],
      subcategoryName: [this.subcategory.subcategoryName, [Validators.required]],
      subcategoryDescription: [this.subcategory.subcategoryDescription],
      subcategoryState: [this.subcategory.subcategoryState, Validators.required],
      category: [this.subcategory.category]
    });
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
    this.subcategoryService.updateSubcategory(this.subcategoryUpdateForm.value).subscribe(
      data => {
        console.log('Success', data)
      },
      error => {
        console.log('Error', error)
      }
    )
  }

}
