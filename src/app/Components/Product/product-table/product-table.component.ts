import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product/product';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

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
        this.errorMessage = null;
      },
      error => {
        console.log('Error ', error);
        this.errorMessage = error.error.message;
      }
    )
  }

  onClick(product : Product){
    console.log(product);
    this.crudProduct.updateProductState(product).subscribe(
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
