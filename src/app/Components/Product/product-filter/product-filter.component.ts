import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/Service/Brand/brand.service';
import { Brand } from 'src/app/Model/Brand/brand';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { SubcategoryService } from 'src/app/Service/Subcategory/subcategory.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  public brandList : Brand[];
  public errorMessage : String;
  public subcategoryList : Subcategory[];

  constructor(
    private crudBrand: BrandService,
    private crudSubcategory : SubcategoryService
  ) { }

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
  }

}
