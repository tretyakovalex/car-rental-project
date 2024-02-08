import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListingsComponent } from './car-listings.component';

describe('CarListingsComponent', () => {
  let component: CarListingsComponent;
  let fixture: ComponentFixture<CarListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarListingsComponent]
    });
    fixture = TestBed.createComponent(CarListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
