import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvardashboardComponent } from './nabvardashboard.component';

describe('NabvardashboardComponent', () => {
  let component: NabvardashboardComponent;
  let fixture: ComponentFixture<NabvardashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvardashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabvardashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
