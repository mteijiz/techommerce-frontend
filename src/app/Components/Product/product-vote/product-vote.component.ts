import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Service/Product/product.service';
import { error } from 'protractor';

@Component({
  selector: 'app-product-vote',
  templateUrl: './product-vote.component.html',
  styleUrls: ['./product-vote.component.css']
})
export class ProductVoteComponent implements OnInit {

  @Input() private product;

  constructor(
    private addVoteFormBuilder: FormBuilder,
    private productService : ProductService
  ) { }

  voteForm;

  get vote(){
    return this.voteForm.get('vote');
  }

  ngOnInit() {
    this.voteForm = this.addVoteFormBuilder.group({
      product: [this.product, [Validators.required]],
      vote: ['', [Validators.required, Validators.min(0)]]
    })
  }

  onSubmit(){
    this.productService.addVoteToProduct(this.voteForm.value).subscribe(
      data =>{
      },
      error =>{
      } 
    );
    
  }

}
