import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Brand } from 'src/app/Model/Brand/brand';
import { BrandService } from 'src/app/Service/Brand/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {

  private errorMessage : String;
  private brand: Brand;

  constructor(
    private updateBrandFormBuilder : FormBuilder,
    private brandService : BrandService,
    private router : Router
  ) { }

  private brandUpdateForm;

  get brandId(){
    return this.brandUpdateForm.get('brandId');
  }

  get brandCode(){
    return this.brandUpdateForm.get('brandCode');
  }

  get brandName(){
    return this.brandUpdateForm.get('brandName');
  }

  get brandDescription(){
    return this.brandUpdateForm.get('brandDescription');
  }
  
  get brandState(){
    return this.brandUpdateForm.get('brandState');
  }

  ngOnInit() {
    if(localStorage.getItem("brand") != null)
      this.getLocalStorage();
    else{
      this.brand = history.state;
      localStorage.setItem("brand", JSON.stringify(history.state));
    }
    this.setBrandUpdateForm();
    
  }

  getLocalStorage(){
    this.brand = JSON.parse(localStorage.getItem("brand"));
  }

  ngOnDestroy(){
    localStorage.removeItem("brand");
  }

  onSubmit(){
    this.brandService.updateBrand(this.brandUpdateForm.value).subscribe(
      data => {
        this.errorMessage = null;
        this.ngOnDestroy();
        this.router.navigateByUrl('/brand');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  getToBrandTable(){
    this.router.navigateByUrl('/brand');
  }

  setBrandUpdateForm(){
    this.brandUpdateForm = this.updateBrandFormBuilder.group({
      brandId: [this.brand.brandId, [Validators.required]],
      brandCode: [this.brand.brandCode, [Validators.required, Validators.maxLength(10)]],
      brandName: [this.brand.brandName, [Validators.required, Validators.maxLength(15)]],
      brandDescription: [this.brand.brandDescription, [Validators.maxLength(500)]],
      brandState: [this.brand.brandState, Validators.required]
    });
  }

}
