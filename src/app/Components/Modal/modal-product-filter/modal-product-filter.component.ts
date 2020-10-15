import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/Model/Brand/brand';
import { Category } from 'src/app/Model/Category/category';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { BrandService } from 'src/app/Service/Brand/brand.service';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Service/Product/product.service';

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
  public productList;

  constructor(
    public activeModal: NgbActiveModal,
    private crudBrand: BrandService,
    private crudSubcategory : SubcategoryService,
    private crudCategory : CategoryService,
    private fb: FormBuilder,
    private productService : ProductService
  ) { }

  filterForm: FormGroup = this.fb.group({
    brands: this.fb.array([]),
    categories: this.fb.array([]),
    subcategories: this.fb.array([]),
    minPrice: ['', [Validators.min(0)]],
    maxPrice: ['', [Validators.min(0)]]
  });

  onCheckboxChangeBrand(e, brand) {
    const checkArray: FormArray = this.filterForm.get('brands') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(brand));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == brand) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.filterForm.value)
  }

  onCheckboxChangeCategory(e, category) {
    const checkArray: FormArray = this.filterForm.get('categories') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(category));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == category) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.filterForm.value)
  }

  onCheckboxChangeSubcategory(e, subcategory) {
    const checkArray: FormArray = this.filterForm.get('subcategories') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(subcategory));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == subcategory) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.filterForm.value)
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
    this.productService.getProductsByFilter(this.filterForm.value).subscribe(
      data => {
        this.productList = data;
        this.errorMessage = null;
        this.closeModal();
      },
      error => {
        console.log("modal",error);
        this.errorMessage = error.error.message;
        this.closeModal();
      }
    )
  }

  closeModal() {
    if(this.errorMessage != null)
      this.activeModal.dismiss(this.errorMessage);
    else
      this.activeModal.close(this.productList);
  }

}
