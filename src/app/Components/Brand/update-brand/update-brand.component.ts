import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Brand } from 'src/app/Model/Brand/brand';
import { BrandService } from 'src/app/Service/Brand/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {

  public errorMessage : String;
  public brand: Brand;
  public example = true;

  constructor(
    private updateBrandFormBuilder : FormBuilder,
    private brandService : BrandService
  ) { }

  brandUpdateForm;

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
    this.brand = history.state;
    this.brandUpdateForm = this.updateBrandFormBuilder.group({
      brandId: [this.brand.brandId, [Validators.required]],
      brandCode: [this.brand.brandCode, [Validators.required]],
      brandName: [this.brand.brandName, [Validators.required]],
      brandDescription: [this.brand.brandDescription],
      brandState: [this.brand.brandState, Validators.required]
    });
  }

  onSubmit(){
    this.brandService.updateBrand(this.brandUpdateForm.value).subscribe(
      data => {
        console.log('Success', data)
      },
      error => {
        console.log('Error', error)
      }
    )
  }

}
