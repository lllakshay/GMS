import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenNavbarComponent } from './citizen-navbar.component';

describe('CitizenNavbarComponent', () => {
  let component: CitizenNavbarComponent;
  let fixture: ComponentFixture<CitizenNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
