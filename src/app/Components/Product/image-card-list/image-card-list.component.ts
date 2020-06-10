import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../Model/Image/image'
import { ImageService } from 'src/app/Service/Image/image.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteImageComponent } from '../../Modal/modal-delete-image/modal-delete-image.component';

@Component({
  selector: 'app-image-card-list',
  templateUrl: './image-card-list.component.html',
  styleUrls: ['./image-card-list.component.css']
})
export class ImageCardListComponent implements OnInit {

  public images : Image[];
  @Input() public product;

  constructor(
    private crudProductImage: ImageService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.crudProductImage.getAllProductImages(this.product.productId).subscribe(
      data => {
        console.log('Success images', data);
        this.images = data;
      },
      error => {
        console.log('Fail images', error);
      }
    )
  }

  openImageDeleteFormModal(image) {
    const modalRef = this.modalService.open(ModalDeleteImageComponent);
    modalRef.componentInstance.image = image;
    modalRef.result.then((result) => {
      console.log(result);
      this.ngOnInit();
    }).catch((error) => {
      console.log(error);
      this.ngOnInit();
    });
  }

}
