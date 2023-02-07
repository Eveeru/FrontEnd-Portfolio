import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardexperienciaComponent } from './dashboardexperiencia.component';

describe('DashboardexperienciaComponent', () => {
  let component: DashboardexperienciaComponent;
  let fixture: ComponentFixture<DashboardexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
