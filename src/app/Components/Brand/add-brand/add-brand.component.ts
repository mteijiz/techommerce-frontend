import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrandService } from 'src/app/Service/Brand/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  public errorMessage : String;

  constructor(
    private createBrandFormBuilder : FormBuilder,
    private brandService : BrandService,
    private router : Router
  ) { }

  public brandCreateForm = this.createBrandFormBuilder.group({
    brandCode: ['', [Validators.required, Validators.maxLength(10)]],
    brandName: ['', [Validators.required, Validators.maxLength(15)]],
    brandDescription: ['', [Validators.maxLength(500)]],
    brandState: [true, [Validators.required]]
  });

  get brandCode(){
    return this.brandCreateForm.get('brandCode');
  }

  get brandName(){
    return this.brandCreateForm.get('brandName');
  }

  get brandDescription(){
    return this.brandCreateForm.get('brandDescription');
  }

  ngOnInit() {
  }

  onSubmit(){
    this.brandService.addBrand(this.brandCreateForm.value).subscribe(
      data => {
        this.errorMessage = null;
        this.router.navigateByUrl('/brand');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  goToBrandTable(){
    this.router.navigateByUrl('/brand');
  }

}
