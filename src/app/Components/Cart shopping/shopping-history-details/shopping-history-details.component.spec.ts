import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingHistoryDetailsComponent } from './shopping-history-details.component';

describe('ShoppingHistoryDetailsComponent', () => {
  let component: ShoppingHistoryDetailsComponent;
  let fixture: ComponentFixture<ShoppingHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingHistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
