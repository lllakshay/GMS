import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewLogComponent } from './admin-view-log.component';

describe('AdminViewLogComponent', () => {
  let component: AdminViewLogComponent;
  let fixture: ComponentFixture<AdminViewLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
