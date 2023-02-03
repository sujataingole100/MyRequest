import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeptLeaveComponent } from './admin-dept-leave.component';

describe('AdminDeptLeaveComponent', () => {
  let component: AdminDeptLeaveComponent;
  let fixture: ComponentFixture<AdminDeptLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeptLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeptLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
