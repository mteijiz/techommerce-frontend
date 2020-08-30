import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/Service/Image/image.service';

@Component({
  selector: 'app-modal-delete-image',
  templateUrl: './modal-delete-image.component.html',
  styleUrls: ['./modal-delete-image.component.css']
})
export class ModalDeleteImageComponent implements OnInit {

  @Input() private image;

  constructor(
    private activeModal: NgbActiveModal,
    private imageService: ImageService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.imageService.deleteImage(this.image.imageId)
      .subscribe(
        data => {
          this.activeModal.close('Modal Closed');
        },
        error => {
          this.activeModal.close('Modal Closed');
        }
      )
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
