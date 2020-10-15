import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  @Input() private product;
  public imageList;

  constructor() { }

  ngOnInit() {
    this.imageList = this.product.productImage;
  }

}
