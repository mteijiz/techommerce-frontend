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
import { Router } from '@angular/router';
import { ValidationService } from '../../../Service/Validations/validation.service'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public errorMessage: String;
  public brandList: Brand[];
  public categoryList: Category[];
  private subcategoryList: Subcategory[];
  public subcategoryListFiltered: Subcategory[];
  private productImages: File[] = [];
  private mainProductImage : File[] = [];

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private createProductFormBuilder: FormBuilder,
    private imageService: ImageService,
    private router : Router
  ) { }

  public productCreateForm = this.createProductFormBuilder.group({
    productCode: ['', [Validators.required, Validators.maxLength(10)]],
    productName: ['', [Validators.required, Validators.maxLength(15)]],
    productDescription: ['', [Validators.maxLength(1000)]],
    productPrice: ['', [Validators.required, Validators.min(0), ValidationService.decimalValidator]],
    productQuantity: ['', [Validators.required, Validators.min(0), ValidationService.noDecimalValidator]],
    productState: [true, [Validators.required]],
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
    
    this.getAllBrands();
    this.getAllCategories();
    this.getAllSubcategories();
    
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(
      data => {
        console.log('Success', data);
        this.brandList = data;
      },
      error => {
        console.log('Fail', error);
      }
    );
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      data => {
        console.log('Success', data);
        this.categoryList = data;
      },
      error => {
        console.log('Fail', error);
      }
    );
  }

  getAllSubcategories(){
    this.subcategoryService.getAllSubcategories().subscribe(
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

  onMainFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var imagesAmount = event.target.files.length;
      for (let i = 0; i < imagesAmount; i++) {
        this.mainProductImage.push(event.target.files[i])
      }
    }
    console.log(this.mainProductImage);
  }

  onSubmit() {
    const mainImageFormData = new FormData();
    const imageFormData = new FormData();
    for(let productImage of this.mainProductImage){
      mainImageFormData.append('image', productImage);
    }
    for (let productImage of this.productImages) {
      console.log(productImage);
      imageFormData.append('images', productImage);
    }
    this.productService.addProduct(this.productCreateForm.value).subscribe(
      data => {
        this.imageService.uploadMainImage(mainImageFormData, data.productId).
          subscribe(
            data => {
              console.log('Success');
            },
            error => {
              console.log('Fail');
              this.errorMessage = error.error.message;
            }
          )
        this.imageService.uploadImage(imageFormData, data.productId).
          subscribe(
            data => {
              console.log('Success');
            },
            error => {
              console.log('Fail');
              this.errorMessage = error.error.message;
            }
          )
        this.errorMessage = null;
        this.router.navigateByUrl('/product');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  onSelect(categoryId: number) {
    this.subcategoryListFiltered = this.subcategoryList.filter((subcategoryList) => subcategoryList.category.categoryId == categoryId);
  }

  getToProductTable(){
    this.router.navigateByUrl('/product');
  }

  onSelectBrand(event){
    console.log(event);
  }

}
