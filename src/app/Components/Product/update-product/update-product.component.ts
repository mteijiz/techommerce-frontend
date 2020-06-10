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
  public product : Product;

  constructor(
    private crudProduct: ProductService,
    private crudBrand: BrandService,
    private crudCategory: CategoryService,
    private crudSubcategory: SubcategoryService,
    private createProductFormBuilder: FormBuilder,
    private crudProductimage: ImageService
  ) { }

  productUpdateForm;

  get productId(){
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
  get productQuantityOfVotes(){
    return this.productUpdateForm.get('productQuantityOfVotes');
  }
  get productQuantityRate(){
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

  ngOnInit() {
    this.product = history.state;
    this.productUpdateForm = this.createProductFormBuilder.group({
      productId: [this.product.productId, [Validators.required]],
      productCode: [this.product.productCode, [Validators.required]],
      productName: [this.product.productName, [Validators.required]],
      productDescription: [this.product.productDescription],
      productPrice: [this.product.productPrice, [Validators.required, Validators.min(0)]],
      productQuantity: [this.product.productQuantity, [Validators.required, Validators.min(0)]],
      productQuantityOfVotes: [this.product.productQuantityOfVotes, [Validators.required, Validators.min(0)]],
      productQuantityRate: [this.product.productRate, [Validators.required, Validators.min(0)]],
      productBrand: [this.product.productBrand, [Validators.required]],
      productCategory: [this.product.productCategory, [Validators.required]],
      productSubcategory: [this.product.productSubcategory, [Validators.required]],
      productState: [this.product.productState, [Validators.required]]
    })
    this.crudBrand.getAllBrands().subscribe(
      data => {
        console.log('Success', data);
        this.brandList = data;
      },
      error => {
        console.log('Fail', error);
      }
    );
    this.crudCategory.getAllCategories().subscribe(
      data => {
        console.log('Success', data);
        this.categoryList = data;
      },
      error => {
        console.log('Fail', error);
      }
    );
    this.crudSubcategory.getAllsubcategories().subscribe(
      data => {
        console.log('Success', data);
        this.subcategoryList = data;
      },
      error => {
        console.log('Fail', error);
      }
    )
  }
  onSubmit() {
    /*this.crudProduct.addProduct(this.productUpdateForm.value).subscribe(
      data => {
        console.log('Success', data);
        this.crudProductimage.uploadImage(imageFormData, data.productId).
          subscribe(
            data => {
              console.log('Success', data);
            },
            error => {
              console.log('Fail image log: ', error);
              this.errorMessage = error.error.message;
              console.log(this.errorMessage);
            }
          )
        this.errorMessage = null;
      },
      error => {
        console.log('Fail', error);
        this.errorMessage = error.error.message;
      }
    )*/
  }

  onSelect(categoryId: number) {
    this.subcategoryListFiltered = this.subcategoryList.filter((subcategoryList) => subcategoryList.category.categoryId == categoryId);
  }

}
