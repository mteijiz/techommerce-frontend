import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardListComponent } from './image-card-list.component';

describe('ImageCardListComponent', () => {
  let component: ImageCardListComponent;
  let fixture: ComponentFixture<ImageCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
