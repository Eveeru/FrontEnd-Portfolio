import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardeducacionComponent } from './dashboardeducacion.component';

describe('DashboardeducacionComponent', () => {
  let component: DashboardeducacionComponent;
  let fixture: ComponentFixture<DashboardeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardeducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
