import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteImageComponent } from './modal-delete-image.component';

describe('ModalDeleteImageComponent', () => {
  let component: ModalDeleteImageComponent;
  let fixture: ComponentFixture<ModalDeleteImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
