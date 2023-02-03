import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { EmployeeComponent } from './layout/pages/employee/employee.component';
import { CreateRequestComponent } from './layout/pages/create-request/create-request.component';
import { RequestListComponent } from './layout/pages/request-list/request-list.component';
import { DepartmentComponent } from './layout/pages/department/department.component';
import { ReportsComponent } from './layout/pages/reports/reports.component';
import { CustomInterceptor } from './custom.interceptor';
import { TableComponent } from './reusable/table/table.component';
import { UserComponent } from './layout/pages/user/user.component';
import { AssignedRequestComponent } from './layout/pages/assigned-request/assigned-request.component';
import { CardComponent } from './reusable/table/card/card.component';
import { EmployeeLeaveComponent } from './layout/pages/ApplyLeave/employee-leave.component';
import { AdminDeptLeaveComponent } from './layout/pages/approveLeave/admin-dept-leave.component';
import { LeavesComponent } from './layout/pages/leaves/leaves.component';
import { AdminDashboardComponent } from './layout/pages/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './layout/pages/employee-dashboard/employee-dashboard.component';
import { AdminDeptDashboardComponent } from './layout/pages/admin-dept-dashboard/admin-dept-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeComponent,
    CreateRequestComponent,
    RequestListComponent,
    DepartmentComponent,
    ReportsComponent,
    TableComponent,
    UserComponent,
    AssignedRequestComponent,
    CardComponent,
    EmployeeLeaveComponent,
    AdminDeptLeaveComponent,
    LeavesComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    AdminDeptDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
