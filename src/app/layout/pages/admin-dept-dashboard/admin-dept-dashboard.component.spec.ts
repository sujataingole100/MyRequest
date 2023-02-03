import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeptDashboardComponent } from './admin-dept-dashboard.component';

describe('AdminDeptDashboardComponent', () => {
  let component: AdminDeptDashboardComponent;
  let fixture: ComponentFixture<AdminDeptDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeptDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeptDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
