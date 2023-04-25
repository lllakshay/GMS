import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddHodComponent } from './admin-add-hod.component';

describe('AdminAddHodComponent', () => {
  let component: AdminAddHodComponent;
  let fixture: ComponentFixture<AdminAddHodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddHodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
