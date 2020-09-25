import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { BrandService } from 'src/app/Service/Brand/brand.service';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ImageService } from 'src/app/Service/Image/image.service';
import { Brand } from 'src/app/Model/Brand/brand';
import { Category } from 'src/app/Model/Category/category';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { Product } from 'src/app/Model/Product/product';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/Service/Validations/validation.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public errorMessage: String;
  public brandList: Brand[];
  public categoryList: Category[];
  public subcategoryList: Subcategory[];
  public subcategoryListFiltered: Subcategory[];
  public productImages: File[] = [];
  public product: Product;
  //public categoryIndex;
  //public subcategoryIndex;

  constructor(
    private crudProduct: ProductService,
    private crudBrand: BrandService,
    private crudCategory: CategoryService,
    private crudSubcategory: SubcategoryService,
    private createProductFormBuilder: FormBuilder,
    private crudProductimage: ImageService,
    private router: Router
  ) { }

  productUpdateForm;

  get productId() {
    return this.productUpdateForm.get('productId');
  }
  get productCode() {
    return this.productUpdateForm.get('productCode');
  }
  get productName() {
    return this.productUpdateForm.get('productName');
  }
  get productDescription() {
    return this.productUpdateForm.get('productDescription');
  }
  get productPrice() {
    return this.productUpdateForm.get('productPrice');
  }
  get productQuantity() {
    return this.productUpdateForm.get('productQuantity');
  }
  get productQuantityOfVotes() {
    return this.productUpdateForm.get('productQuantityOfVotes');
  }
  get productQuantityRate() {
    return this.productUpdateForm.get('productQuantityRate');
  }
  get productBrand() {
    return this.productUpdateForm.get('productBrand');
  }
  get productCategory() {
    return this.productUpdateForm.get('productCategory');
  }
  get productSubcategory() {
    return this.productUpdateForm.get('productSubcategory');
  }
  get productState() {
    return this.productUpdateForm.get('productState');
  }

  get productQuantityToAddOrSubstract(){
    return this.productUpdateForm.get('productQuantityToAddOrSubstract');
  }

  ngOnInit() {
    if (localStorage.getItem("product") != null)
      this.getLocalStorage();
    else {
      this.product = history.state;
      console.log("ngOnInit: ", JSON.stringify(history.state));
      localStorage.setItem("product", JSON.stringify(history.state));
    }
    this.getAllBrands();
    this.getAllCategories();
    this.getAllSubcategories();
    this.setProductFormValues();
  }

  setProductFormValues(){
    this.productUpdateForm = this.createProductFormBuilder.group({
      productId: [this.product.productId, [Validators.required]],
      productCode: [this.product.productCode, [Validators.required, Validators.maxLength(10)]],
      productName: [this.product.productName, [Validators.required, Validators.maxLength(15)]],
      productDescription: [this.product.productDescription, [Validators.maxLength(1000)]],
      productPrice: [this.product.productPrice, [Validators.required, Validators.min(0), ValidationService.decimalValidator]],
      productQuantity: [this.product.productQuantity, [Validators.required, Validators.min(0), ValidationService.noDecimalValidator]],
      productQuantityToAddOrSubstract: ['0', [Validators.required, ValidationService.noDecimalValidatorAndNegative]],
      productBrand: ['', [Validators.required]],
      productCategory: ['', [Validators.required]],
      productSubcategory: ['', [Validators.required]],
      productState: [this.product.productState, [Validators.required]]
    })
  }

  getAllBrands(){
    this.crudBrand.getAllBrands().subscribe(
      data => {
        console.log('Success', data);
        this.brandList = data;
        for(let i = 0; i < this.brandList.length; i++){
          if(this.brandList[i].brandId === this.product.productBrand.brandId){
            this.productUpdateForm.patchValue({productBrand: this.brandList[i]});
          }
        }
      },
      error => {
        console.log('Fail', error);
      }
    );
  }

  getAllCategories(){
    this.crudCategory.getAllCategories().subscribe(
      data => {
        console.log('Success', data);
        this.categoryList = data;
        for(let i = 0; i < this.categoryList.length; i++){
          if(this.categoryList[i].categoryId === this.product.productCategory.categoryId){
            this.productUpdateForm.patchValue({productCategory: this.categoryList[i]});
          }
        }
      },
      error => {
        console.log('Fail', error);
      }
    );
  }

  getAllSubcategories(){
    this.crudSubcategory.getAllSubcategories().subscribe(
      data => {
        console.log('Success', data);
        this.subcategoryList = data;
        for(let i = 0; i < this.subcategoryList.length; i++){
          if(this.subcategoryList[i].subcategoryId === this.product.productSubcategory.subcategoryId){
            this.productUpdateForm.patchValue({productSubcategory: this.subcategoryList[i]});
          }
        }
        this.onSelect(this.product.productCategory.categoryId);
      },
      error => {
        console.log('Fail', error);
      }
    )
  }

  getLocalStorage() {
    this.product = JSON.parse(localStorage.getItem("product"));
  }

  ngOnDestroy() {
    console.log("ng on destroy");
    localStorage.removeItem("product");
  }

  onSubmit() {
    this.crudProduct.updateProduct(this.productUpdateForm.value).subscribe(
      data => {
        console.log('Success', data);
        this.errorMessage = null;
        this.router.navigateByUrl('/product');
      },
      error => {
        console.log('Fail', error);
        this.errorMessage = error.error.message;
      }
    )
    
  }

  onSelectBrand(event){
    console.log(event);
  }

  onSelect(categoryId: number) {
    console.log("on select: ", categoryId);
    this.subcategoryListFiltered = this.subcategoryList.filter((subcategoryList) => subcategoryList.category.categoryId == categoryId);
  }

  getToProductTable() {
    this.router.navigateByUrl('/product');
  }

}
