import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public errorMessage : String;

  constructor(
    private createCategoryFormBuilder : FormBuilder,
    private categoryService : CategoryService,
    private router : Router
  ) { }

  public categoryCreateForm = this.createCategoryFormBuilder.group({
    categoryCode: ['', [Validators.required,  Validators.maxLength(10)]],
    categoryName: ['', [Validators.required,  Validators.maxLength(15)]],
    categoryDescription: ['', [ Validators.maxLength(500)]],
    categoryState: [true, [Validators.required]]
  });

  get categoryCode(){
    return this.categoryCreateForm.get('categoryCode');
  }

  get categoryName(){
    return this.categoryCreateForm.get('categoryName');
  }
  
  get categoryDescription(){
    return this.categoryCreateForm.get('categoryDescription');
  }

  ngOnInit(){
    
  }

  onSubmit(){
    this.categoryService.addCategory(this.categoryCreateForm.value).subscribe(
      data => {
        this.errorMessage = null;
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

}
