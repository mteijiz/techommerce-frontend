import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVoteComponent } from './product-vote.component';

describe('ProductVoteComponent', () => {
  let component: ProductVoteComponent;
  let fixture: ComponentFixture<ProductVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
