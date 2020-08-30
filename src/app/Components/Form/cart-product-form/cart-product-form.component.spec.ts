import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductFormComponent } from './cart-product-form.component';

describe('CartProductFormComponent', () => {
  let component: CartProductFormComponent;
  let fixture: ComponentFixture<CartProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
