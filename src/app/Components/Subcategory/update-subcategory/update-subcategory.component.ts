import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { Category } from 'src/app/Model/Category/category';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-subcategory',
  templateUrl: './update-subcategory.component.html',
  styleUrls: ['./update-subcategory.component.css']
})
export class UpdateSubcategoryComponent implements OnInit {

  private errorMessage : String;
  private subcategory: Subcategory;
  private categoryList : Category[] = new Array();

  constructor(
    private updateSubcategoryFormBuilder : FormBuilder,
    private subcategoryService : SubcategoryService,
    private crudCategory : CategoryService,
    private router : Router
  ) { }

  private subcategoryUpdateForm : FormGroup;

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
    if(localStorage.getItem("subcategory") != null)
      this.getLocalStorage();
    else{
      this.subcategory = history.state;
      localStorage.setItem("subcategory", JSON.stringify(history.state));
    }
    this.loadCategoryAndForm();
    
  }

  getLocalStorage(){
    this.subcategory = JSON.parse(localStorage.getItem("subcategory"));
  }

  ngOnDestroy(){
    localStorage.removeItem("subcategory");
  }

  onSubmit(){
    this.subcategoryService.updateSubcategory(this.subcategoryUpdateForm.value).subscribe(
      data => {
        this.errorMessage = null;
        this.ngOnDestroy();
        this.router.navigateByUrl('/subcategory');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  getToSubcategoryTable(){
    this.router.navigateByUrl('/subcategory');
  }

  loadCategoryAndForm(){
    this.crudCategory.getAllCategories().subscribe(
      data=>{
        this.categoryList = data;
        for(let i = 0; i < this.categoryList.length; i++){
          if(this.categoryList[i].categoryId === this.subcategory.category.categoryId){
            this.subcategoryUpdateForm.patchValue({category: this.categoryList[i]});
          }
        }
      },
      error=>{
        console.log('Fail', error);
      }
    )
    this.subcategoryUpdateForm = this.updateSubcategoryFormBuilder.group({
      subcategoryId: [this.subcategory.subcategoryId, [Validators.required]],
      subcategoryCode: [this.subcategory.subcategoryCode, [Validators.required, Validators.maxLength(10)]],
      subcategoryName: [this.subcategory.subcategoryName, [Validators.required, Validators.maxLength(15)]],
      subcategoryDescription: [this.subcategory.subcategoryDescription, [Validators.maxLength(100)]],
      subcategoryState: [this.subcategory.subcategoryState, Validators.required],
      category: ['', [Validators.required]]
    });
  }

}
