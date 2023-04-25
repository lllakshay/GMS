import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodUpdatePasswordComponent } from './hod-update-password.component';

describe('HodUpdatePasswordComponent', () => {
  let component: HodUpdatePasswordComponent;
  let fixture: ComponentFixture<HodUpdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodUpdatePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
