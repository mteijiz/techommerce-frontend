import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Model/Brand/brand';
import { BrandService } from 'src/app/Service/Brand/brand.service';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css']
})
export class BrandTableComponent implements OnInit {

  brandList: Brand[];
  errorMessage: String;

  constructor(
    private crudBrand: BrandService
  ) { }

  ngOnInit() {
    this.crudBrand.getAllBrands().subscribe(
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
  }

  onClick(brand : Brand){
    this.crudBrand.updateBrandState(brand).subscribe(
      data=>{
        console.log('Success', data);
        this.ngOnInit();
      },
      error=>{
        console.log('Fail', error);
      }
      
    )
  }

}
