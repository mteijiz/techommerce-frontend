import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/Model/Category/category';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  public errorMessage : String;
  private category: Category;

  constructor(
    private updateCategoryFormBuilder : FormBuilder,
    private categoryService : CategoryService,
    private router : Router
  ) { }

  public categoryUpdateForm : FormGroup;

  get categoryId(){
    return this.categoryUpdateForm.get('categoryId');
  }

  get categoryCode(){
    return this.categoryUpdateForm.get('categoryCode');
  }

  get categoryName(){
    return this.categoryUpdateForm.get('categoryName');
  }

  get categoryDescription(){
    return this.categoryUpdateForm.get('categoryDescription');
  }
  
  get categoryState(){
    return this.categoryUpdateForm.get('categoryState');
  }

  ngOnInit() {
    if(localStorage.getItem("category") != null)
      this.getLocalStorage();
    else{
      this.category = history.state;
      localStorage.setItem("category", JSON.stringify(history.state));
    }
    this.setCategoryUpdateForm();
  }

  getLocalStorage(){
    this.category = JSON.parse(localStorage.getItem("category"));
  }

  ngOnDestroy(){
    localStorage.removeItem("category");
  }

  onSubmit(){
    this.categoryService.updateCategory(this.categoryUpdateForm.value).subscribe(
      data => {
        this.errorMessage = null;
        this.ngOnDestroy();
        this.router.navigateByUrl('/category');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  getToCategoryTable(){
    this.router.navigateByUrl('/category');
  }

  setCategoryUpdateForm(){
    this.categoryUpdateForm = this.updateCategoryFormBuilder.group({
      categoryId: [this.category.categoryId, [Validators.required]],
      categoryCode: [this.category.categoryCode, [Validators.required, Validators.maxLength(10)]],
      categoryName: [this.category.categoryName, [Validators.required, Validators.maxLength(15)]],
      categoryDescription: [this.category.categoryDescription, [Validators.maxLength(500)]],
      categoryState: [this.category.categoryState, Validators.required]
    });
  }
}
