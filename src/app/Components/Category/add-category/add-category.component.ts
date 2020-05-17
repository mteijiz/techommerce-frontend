import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/Service/Category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public errorMessage : String;

  constructor(
    private createCategoryFormBuilder : FormBuilder,
    private categoryService : CategoryService
  ) { }

  categoryCreateForm = this.createCategoryFormBuilder.group({
    categoryCode: ['', [Validators.required]],
    categoryName: ['', [Validators.required]],
    categoryDescription: ['']
  });

  get categoryCode(){
    return this.categoryCreateForm.get('categoryCode');
  }

  get categoryName(){
    return this.categoryCreateForm.get('categoryName');
  }

  ngOnInit(){
    
  }

  onSubmit(){
    this.categoryService.addCategory(this.categoryCreateForm.value).subscribe(
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
