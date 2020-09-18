import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductFilterComponent } from './modal-product-filter.component';

describe('ModalProductFilterComponent', () => {
  let component: ModalProductFilterComponent;
  let fixture: ComponentFixture<ModalProductFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProductFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
