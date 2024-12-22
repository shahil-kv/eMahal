import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerTimeComponent } from './prayer-time.component';

describe('PrayerTimeComponent', () => {
  let component: PrayerTimeComponent;
  let fixture: ComponentFixture<PrayerTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerTimeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
