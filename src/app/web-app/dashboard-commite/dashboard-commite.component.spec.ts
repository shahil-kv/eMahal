import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCommiteComponent } from './dashboard-commite.component';

describe('DashboardCommiteComponent', () => {
  let component: DashboardCommiteComponent;
  let fixture: ComponentFixture<DashboardCommiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCommiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCommiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
