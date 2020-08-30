import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Model/Brand/brand';
import { BrandService } from 'src/app/Service/Brand/brand.service';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css']
})
export class BrandTableComponent implements OnInit {

  private brandList: Brand[];
  private errorMessage: String;

  constructor(
    private brandService: BrandService
  ) { }

  ngOnInit() {
    this.getAllBrandsService();
  }

  getAllBrandsService(){
    this.brandService.getAllBrands().subscribe(
      data => {
        this.brandList = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

}
