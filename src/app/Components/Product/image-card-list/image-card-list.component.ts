import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../Model/Image/image'
import { ImageService } from 'src/app/Service/Image/image.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteImageComponent } from '../../Modal/modal-delete-image/modal-delete-image.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-image-card-list',
  templateUrl: './image-card-list.component.html',
  styleUrls: ['./image-card-list.component.css']
})
export class ImageCardListComponent implements OnInit {

  //@Input() private product;
  private product;
  private errorMessage : String;
  public newProductImageToUpload: File[] = [];
  public newMainProductImage: File[] = [];

  constructor(
    private imageService: ImageService,
    private modalService: NgbModal,
    private router: Router,
    private updateImageFormBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("product") != null)
      this.getLocalStorage();
    else {
      this.product = history.state;
      console.log("ngOnInit: ", JSON.stringify(history.state));
      localStorage.setItem("product", JSON.stringify(history.state));
    }
  }

  getLocalStorage() {
    this.product = JSON.parse(localStorage.getItem("product"));
  }

  ngOnDestroy() {
    console.log("ng on destroy");
    localStorage.removeItem("product");
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var imagesAmount = event.target.files.length;
      for (let i = 0; i < imagesAmount; i++) {
        this.newProductImageToUpload.push(event.target.files[i])
      }
    }
    console.log(this.newProductImageToUpload);
  }

  onMainFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var imagesAmount = event.target.files.length;
      for (let i = 0; i < imagesAmount; i++) {
        this.newMainProductImage.push(event.target.files[i])
      }
    }
    console.log(this.newMainProductImage);
  }

  onSubmit(){
    const mainImageFormData = new FormData();
    const imageFormData = new FormData();
    for (let productImage of this.newMainProductImage) {
      mainImageFormData.append('image', productImage);
    }
    for (let productImage of this.newProductImageToUpload) {
      console.log(productImage);
      imageFormData.append('images', productImage);
    }
    if(this.newMainProductImage.length>0){
      this.imageService.uploadMainImage(mainImageFormData, this.product.productId).
      subscribe(
        data => {
          console.log('Success', data);
          this.refreshProduct();
          this.ngOnInit();
        },
        error => {
          console.log('Fail image log: ', error);
          this.newMainProductImage = [];
          this.errorMessage = error.error.message;
          console.log(this.errorMessage);
        }
      )
    }
    if(this.newProductImageToUpload.length>0){
      this.imageService.uploadImage(imageFormData, this.product.productId).
      subscribe(
        data => {
          console.log('Success', data);
          this.refreshProduct();
          this.ngOnInit();
        },
        error => {
          console.log('Fail image log: ', error);
          this.newProductImageToUpload = [];
          this.errorMessage = error.error.message;
          console.log(this.errorMessage);
        }
      ) 
    }
    
  }

  openImageDeleteFormModal(image) {
    const modalRef = this.modalService.open(ModalDeleteImageComponent);
    modalRef.componentInstance.image = image;
    modalRef.result.then((result) => {
      this.refreshProduct();
      this.ngOnInit();
    }).catch((error) => {
      this.refreshProduct();
      this.ngOnInit();
    });
  }

  changeMainImage(image){
    const updateImageForm = this.updateImageFormBuilder.group({
      product: [this.product, [Validators.required]],
      imageId: [image.imageId, [Validators.required]]
    })
    console.log("Form: ", updateImageForm.value);
    this.imageService.changeMainImage(updateImageForm.value).subscribe(
      data => {
        this.refreshProduct();
      },
      error => {
        console.log('error ', error);
        this.errorMessage = error.error.message;
        
      }
    );
  }

  getToProductTable() {
    this.router.navigateByUrl('/product');
  }

  refreshProduct(){
    console.log("refresh");
    this.productService.getProductById(this.product.productId).subscribe(
      data => {
        console.log("Datos", data);
        this.product = data;
        localStorage.removeItem("product");
        localStorage.setItem("product", JSON.stringify(this.product));
      },
      error => {

      }
    );
  }

}
