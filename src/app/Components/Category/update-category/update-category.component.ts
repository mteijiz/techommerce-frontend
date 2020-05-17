import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/Model/Category/category';
import { CategoryService } from 'src/app/Service/Category/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  public errorMessage : String;
  public category: Category;
  public example = true;

  constructor(
    private updateCategoryFormBuilder : FormBuilder,
    private categoryService : CategoryService
  ) { }

  categoryUpdateForm;

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
    this.category = history.state;
    this.categoryUpdateForm = this.updateCategoryFormBuilder.group({
      categoryId: [this.category.categoryId, [Validators.required]],
      categoryCode: [this.category.categoryCode, [Validators.required]],
      categoryName: [this.category.categoryName, [Validators.required]],
      categoryDescription: [this.category.categoryDescription],
      categoryState: [this.category.categoryState, Validators.required]
    });
  }

  onSubmit(){
    this.categoryService.updateCategory(this.categoryUpdateForm.value).subscribe(
      data => {
        console.log('Success', data)
      },
      error => {
        console.log('Error', error)
      }
    )
  }

}
