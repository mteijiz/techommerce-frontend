import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrandService } from 'src/app/Service/Brand/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  public errorMessage : String;

  constructor(
    private createBrandFormBuilder : FormBuilder,
    private brandService : BrandService
  ) { }

  brandCreateForm = this.createBrandFormBuilder.group({
    brandCode: ['', [Validators.required]],
    brandName: ['', [Validators.required]],
    brandDescription: ['']
  });

  get brandCode(){
    return this.brandCreateForm.get('brandCode');
  }

  get brandName(){
    return this.brandCreateForm.get('brandName');
  }

  ngOnInit() {
  }

  onSubmit(){
    this.brandService.addBrand(this.brandCreateForm.value).subscribe(
      data => {
        console.log('Success', data);
        this.errorMessage = null;
      },
      error => {
        console.log('Fail', error);
        this.errorMessage = error.error.message;
      }
    )
  }

}
