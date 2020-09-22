import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWarningProductComponent } from './modal-warning-product.component';

describe('ModalWarningProductComponent', () => {
  let component: ModalWarningProductComponent;
  let fixture: ComponentFixture<ModalWarningProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWarningProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWarningProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
