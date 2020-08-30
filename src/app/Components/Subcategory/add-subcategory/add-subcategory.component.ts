import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { Category } from 'src/app/Model/Category/category';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  private errorMessage : String;
  private categoryList : Category[];

  constructor(
    private createSubcategoryFormBuilder : FormBuilder,
    private subcategoryService : SubcategoryService,
    private categoryService: CategoryService,
    private router : Router
  ) { }

  private subcategoryCreateForm = this.createSubcategoryFormBuilder.group({
    subcategoryCode: ['', [Validators.required, Validators.maxLength(10)]],
    subcategoryName: ['', [Validators.required, Validators.maxLength(15)]],
    subcategoryDescription: ['', [Validators.maxLength(500)]],
    subcategoryState: [true, [Validators.required]],
    category: ['', [Validators.required]]
  });

  get subcategoryCode(){
    return this.subcategoryCreateForm.get('subcategoryCode');
  }

  get subcategoryName(){
    return this.subcategoryCreateForm.get('subcategoryName');
  }

  get subcategoryDescription(){
    return this.subcategoryCreateForm.get('subcategoryDescription');
  }

  get category(){
    return this.category.get('category');
  }

  ngOnInit(){
    this.getAllCategories();
  }

  onSubmit(){
    this.subcategoryService.addSubcategory(this.subcategoryCreateForm.value).subscribe(
      data => {
        this.errorMessage = null;
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

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      data=>{
        this.categoryList = data;
      },
      error=>{
        this.errorMessage = error.error.message;
      }
    )
  }
}
