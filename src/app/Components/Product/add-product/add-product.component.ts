import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Model/Category/category';
import { Brand } from 'src/app/Model/Brand/brand';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { ProductService } from 'src/app/Service/Product/product.service';
import { BrandService } from 'src/app/Service/Brand/brand.service';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/Service/Image/image.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public errorMessage: String;
  public brandList: Brand[];
  public categoryList: Category[];
  public subcategoryList: Subcategory[];
  public subcategoryListFiltered: Subcategory[];
  public productImages: File[] = [];

  constructor(
    private crudProduct: ProductService,
    private crudBrand: BrandService,
    private crudCategory: CategoryService,
    private crudSubcategory: SubcategoryService,
    private createProductFormBuilder: FormBuilder,
    private crudProductimage: ImageService
  ) { }

  productCreateForm = this.createProductFormBuilder.group({
    productCode: ['', [Validators.required]],
    productName: ['', [Validators.required]],
    productDescription: [''],
    productPrice: ['', [Validators.required, Validators.min(0)]],
    productQuantity: ['', [Validators.required, Validators.min(0)]],
    productBrand: ['', [Validators.required]],
    productCategory: ['', [Validators.required]],
    productSubcategory: ['', [Validators.required]]
  })

  get productCode() {
    return this.productCreateForm.get('productCode');
  }
  get productName() {
    return this.productCreateForm.get('productName');
  }
  get productDescription() {
    return this.productCreateForm.get('productDescription');
  }
  get productPrice() {
    return this.productCreateForm.get('productPrice');
  }
  get productQuantity() {
    return this.productCreateForm.get('productQuantity');
  }
  get productBrand() {
    return this.productCreateForm.get('productBrand');
  }
  get productCategory() {
    return this.productCreateForm.get('productCategory');
  }
  get productSubcategory() {
    return this.productCreateForm.get('productSubcategory');
  }

  ngOnInit() {
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

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var imagesAmount = event.target.files.length;
      for (let i = 0; i < imagesAmount; i++) {
        this.productImages.push(event.target.files[i])
      }
    }
    console.log(this.productImages);
  }

  onSubmit() {
    const imageFormData = new FormData();
    for (let productImage of this.productImages) {
      console.log(productImage);
      imageFormData.append('images', productImage);
    }
    console.log(imageFormData);
    this.crudProduct.addProduct(this.productCreateForm.value).subscribe(
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
    )
  }

  onSelect(categoryId: number) {
    this.subcategoryListFiltered = this.subcategoryList.filter((subcategoryList) => subcategoryList.category.categoryId == categoryId);
  }

}
