import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardproyectosComponent } from './dashboardproyectos.component';

describe('DashboardproyectosComponent', () => {
  let component: DashboardproyectosComponent;
  let fixture: ComponentFixture<DashboardproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
