import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { Product } from 'src/app/Model/Product/product';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { CartDetails } from 'src/app/Model/CartDetails/cart-details';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalProductFilterComponent } from '../../Modal/modal-product-filter/modal-product-filter.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  private categoryName: String = null;
  private productListFiltered: Product[];

  private cartForm: FormGroup;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private securityService: KeycloakSecurityService,
    private activeRoute: ActivatedRoute,
    private addCartFormBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal
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

  goToProductDetails(product) {
    this.router.navigateByUrl('/shop/product-details');
  }

  loadProductWithCategory() {
    this.productService.getAllActiveProducts().subscribe(
      data => {
        this.productList = data;
        this.productListFiltered = this.productList;
        console.log("Prod: ", data);
        if (this.categoryName != null) {
          this.productListFiltered = this.productList.filter((productList) => productList.productCategory.categoryName == this.categoryName)
        }
        else {
          this.productListFiltered = this.productList;
        }
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  openFilterFormModal() {
    const modalRef = this.modalService.open(ModalProductFilterComponent);
    modalRef.result.then((result) => {
      console.log("cerro por result");
      this.productListFiltered = result;
      this.errorMessage = null;
    }).catch((error) => {
      this.errorMessage = error;
      this.productListFiltered = [];
    });
  }

  resetFilter(){
    this.productListFiltered = this.productList;
  }
}
