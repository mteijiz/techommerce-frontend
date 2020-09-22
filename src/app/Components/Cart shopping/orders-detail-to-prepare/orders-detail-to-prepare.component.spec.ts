import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailToPrepareComponent } from './orders-detail-to-prepare.component';

describe('OrdersDetailToPrepareComponent', () => {
  let component: OrdersDetailToPrepareComponent;
  let fixture: ComponentFixture<OrdersDetailToPrepareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailToPrepareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailToPrepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
