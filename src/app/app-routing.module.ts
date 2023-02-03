import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeptLeaveComponent } from './layout/pages/approveLeave/admin-dept-leave.component';
import { AssignedRequestComponent } from './layout/pages/assigned-request/assigned-request.component';
import { CreateRequestComponent } from './layout/pages/create-request/create-request.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { DepartmentComponent } from './layout/pages/department/department.component';
import { EmployeeLeaveComponent } from './layout/pages/ApplyLeave/employee-leave.component';
import { EmployeeComponent } from './layout/pages/employee/employee.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { ReportsComponent } from './layout/pages/reports/reports.component';
import { RequestListComponent } from './layout/pages/request-list/request-list.component';
import { UserComponent } from './layout/pages/user/user.component';
import { LeavesComponent } from './layout/pages/leaves/leaves.component';
import { AdminDeptDashboardComponent } from './layout/pages/admin-dept-dashboard/admin-dept-dashboard.component';
import { AdminDashboardComponent } from './layout/pages/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './layout/pages/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
   {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'createRequest',
        component:CreateRequestComponent
      },
      {
        path:'requestList',
        component:RequestListComponent
      },
      {
        path:'department',
        component:DepartmentComponent
      },
      {
        path:'reports',
        component:ReportsComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'assignedRequest',
        component:AssignedRequestComponent
      },
      {
        path:'employeeLeave',
        component:EmployeeLeaveComponent
      },
      {
        path:'adminDeptLeave',
        component:AdminDeptLeaveComponent
      },
      {
        path:'leaves',
        component:LeavesComponent
      },
      {
        path:'AdminDeptDash',
        component:AdminDeptDashboardComponent
      },
      {
        path:'AdminDash',
        component:AdminDashboardComponent
      },
      {
        path:'EmployeeDash',
        component:EmployeeDashboardComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
