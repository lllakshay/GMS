import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnlockAccountComponent } from './admin-unlock-account.component';

describe('AdminUnlockAccountComponent', () => {
  let component: AdminUnlockAccountComponent;
  let fixture: ComponentFixture<AdminUnlockAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUnlockAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnlockAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
