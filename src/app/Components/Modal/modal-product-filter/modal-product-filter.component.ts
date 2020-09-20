import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/Model/Brand/brand';
import { Category } from 'src/app/Model/Category/category';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { BrandService } from 'src/app/Service/Brand/brand.service';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-product-filter',
  templateUrl: './modal-product-filter.component.html',
  styleUrls: ['./modal-product-filter.component.css']
})
export class ModalProductFilterComponent implements OnInit {

  public brandList : Brand[];
  public errorMessage : String;
  public subcategoryList : Subcategory[];
  public categoryList : Category[];

  constructor(
    private activeModal: NgbActiveModal,
    private crudBrand: BrandService,
    private crudSubcategory : SubcategoryService,
    private crudCategory : CategoryService,
    private fb: FormBuilder
  ) { }

  filterForm: FormGroup = this.fb.group({
    brands: this.fb.array([]),
    categories: this.fb.array([]),
    subcategories: this.fb.array([])
  });

  onCheckboxChangeBrand(e) {
    const checkArray: FormArray = this.filterForm.get('brands') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.filterForm.value)
  }

  onCheckboxChangeCategory(e) {
    const checkArray: FormArray = this.filterForm.get('categories') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.filterForm.value)
  }

  onCheckboxChangeSubcategory(e) {
    const checkArray: FormArray = this.filterForm.get('subcategories') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    
  }

  ngOnInit() {
    this.crudBrand.getAllActiveBrands().subscribe(
      data => {
        console.log('Success ', data);
        this.brandList = data;
        this.errorMessage = null;
      },
      error => {
        console.log('Error ', error);
        this.errorMessage = error.error.message;
      }

    )
    this.crudSubcategory.getAllActiveSubcategories().subscribe(
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
    this.crudCategory.getAllActiveCategory().subscribe(
      data => {
        this.categoryList = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }

    )
  }

  onSubmit() {
    console.log(this.filterForm.value);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
