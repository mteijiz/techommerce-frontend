import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { Product } from 'src/app/Model/Product/product';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { CartDetails } from 'src/app/Model/CartDetails/cart-details';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private errorMessage: String;
  private productList: Product[];
  private cartDetail: CartDetails;
  private subscribe: any;
  private categoryName : String = null;
  private productListFiltered : Product[];

  private cartForm : FormGroup;

  constructor(
    private productService: ProductService, 
    private cartService : CartService,
    private securityService:KeycloakSecurityService,
    private activeRoute: ActivatedRoute,
    private addCartFormBuilder : FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscribe = this.activeRoute.params.subscribe(params => {
      this.categoryName = params['id'];
      this.loadProductWithCategory();
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  onClick(product){
    this.setCartForm(product);
    if(this.cartForm.get('quantity').value <= product.productQuantity){
      this.cartService.addToCartWithQuantity(this.cartForm.value).subscribe(
        data => {
        },
        error => {
        }
      )
      }
      else{
        this.errorMessage = "No hay suficienta cantidad para el pedido";
      }
  }

  setCartForm(product){
    this.cartForm = this.addCartFormBuilder.group({
      product: [product, [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(0)]]
    })
  }

  goToProductDetails(product){
    this.router.navigateByUrl('/shop/product-details');
  }

  loadProductWithCategory(){
    this.productService.getAllActiveProducts().subscribe(
      data => {
        this.productList = data;
        this.productListFiltered = this.productList;
        console.log("Prod: ", data);
        if(this.categoryName != null){
          this.productListFiltered = this.productList.filter((productList) => productList.productCategory.categoryName == this.categoryName)
        }
        else{
          this.productListFiltered = this.productList;
        }
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

}
