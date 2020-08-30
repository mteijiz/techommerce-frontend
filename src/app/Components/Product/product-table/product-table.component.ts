import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product/product';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  private errorMessage: String;
  private productList: Product[];
  

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      data => {
        this.productList = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  onClick(product : Product){
    console.log(product);
    this.productService.updateProductState(product).subscribe(
      data=>{
        this.ngOnInit();
      },
      error=>{
      }
    )
  }

}
