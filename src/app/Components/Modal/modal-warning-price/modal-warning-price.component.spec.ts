import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWarningPriceComponent } from './modal-warning-price.component';

describe('ModalWarningPriceComponent', () => {
  let component: ModalWarningPriceComponent;
  let fixture: ComponentFixture<ModalWarningPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWarningPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWarningPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
