import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { Product } from 'src/app/Model/Product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public errorMessage: String;
  public productList: Product[];

  constructor(
    private crudProduct: ProductService
  ) { }

  ngOnInit() {
    this.crudProduct.getAllProducts().subscribe(
      data => {
        console.log('Success ', data);
        this.productList = data;
        console.log('Product and image', this.productList[0].productImage[0].imageName);
        this.errorMessage = null;
      },
      error => {
        console.log('Error ', error);
        this.errorMessage = error.error.message;
      }
    )
  }

}
