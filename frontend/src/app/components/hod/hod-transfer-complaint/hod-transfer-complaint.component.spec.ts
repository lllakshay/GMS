import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodTransferComplaintComponent } from './hod-transfer-complaint.component';

describe('HodTransferComplaintComponent', () => {
  let component: HodTransferComplaintComponent;
  let fixture: ComponentFixture<HodTransferComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodTransferComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodTransferComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
