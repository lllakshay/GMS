import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodViewComplaintComponent } from './hod-view-complaint.component';

describe('HodViewComplaintComponent', () => {
  let component: HodViewComplaintComponent;
  let fixture: ComponentFixture<HodViewComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodViewComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodViewComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
