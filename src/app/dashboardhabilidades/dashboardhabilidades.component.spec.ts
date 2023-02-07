import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardhabilidadesComponent } from './dashboardhabilidades.component';

describe('DashboardhabilidadesComponent', () => {
  let component: DashboardhabilidadesComponent;
  let fixture: ComponentFixture<DashboardhabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardhabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardhabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
