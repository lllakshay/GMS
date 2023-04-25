import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodViewReminderComponent } from './hod-view-reminder.component';

describe('HodViewReminderComponent', () => {
  let component: HodViewReminderComponent;
  let fixture: ComponentFixture<HodViewReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodViewReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodViewReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
