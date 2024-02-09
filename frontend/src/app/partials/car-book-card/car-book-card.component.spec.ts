import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBookCardComponent } from './car-book-card.component';

describe('CarBookCardComponent', () => {
  let component: CarBookCardComponent;
  let fixture: ComponentFixture<CarBookCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarBookCardComponent]
    });
    fixture = TestBed.createComponent(CarBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
