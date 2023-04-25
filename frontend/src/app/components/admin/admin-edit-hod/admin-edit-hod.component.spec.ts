import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditHodComponent } from './admin-edit-hod.component';

describe('AdminEditHodComponent', () => {
  let component: AdminEditHodComponent;
  let fixture: ComponentFixture<AdminEditHodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditHodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
