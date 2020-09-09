import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToCartFormComponent } from './add-product-to-cart-form.component';

describe('AddProductToCartFormComponent', () => {
  let component: AddProductToCartFormComponent;
  let fixture: ComponentFixture<AddProductToCartFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductToCartFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToCartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
