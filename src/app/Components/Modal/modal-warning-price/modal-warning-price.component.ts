import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-warning-price',
  templateUrl: './modal-warning-price.component.html',
  styleUrls: ['./modal-warning-price.component.css']
})
export class ModalWarningPriceComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
