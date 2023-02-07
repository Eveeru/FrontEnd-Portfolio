import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpresentacionComponent } from './dashboardpresentacion.component';

describe('DashboardpresentacionComponent', () => {
  let component: DashboardpresentacionComponent;
  let fixture: ComponentFixture<DashboardpresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardpresentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardpresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
