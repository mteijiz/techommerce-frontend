import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/Service/Image/image.service';

@Component({
  selector: 'app-modal-delete-image',
  templateUrl: './modal-delete-image.component.html',
  styleUrls: ['./modal-delete-image.component.css']
})
export class ModalDeleteImageComponent implements OnInit {

  @Input() public image;

  constructor(
    public activeModal: NgbActiveModal,
    private crud_image: ImageService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.crud_image.deleteImage(this.image.imageId)
      .subscribe(
        data => {
          console.log('Success!', data);
          this.activeModal.close('Modal Closed');
        },
        error => {
          console.log('Fail', error);
          this.activeModal.close('Modal Closed');
        }
      )
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
