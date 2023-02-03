import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRole: string = "";
  filteredRoutesArray: any[] = []
  routesArray: any[] = [
    // {
    //   path: 'dashboard',
    //   text: 'Dashboard',
    //   Role: 'Admin',
    //   icon: 'fa fa-home fs-4'
    // },
    {
      path: 'AdminDash',
      text: 'Dashboard',
      Role: 'Admin',
      icon: 'fa fa-home fs-4'
    },
    {
      path: 'AdminDeptDash',
      text: 'Dashboard',
      Role: 'AdminDept',
      icon: 'fa fa-home fs-4'
    },
    {
      path: 'EmployeeDash',
      text: 'Dashboard',
      Role: 'Employee',
      icon: 'fa fa-home fs-4'
    },
    {
      path: 'department',
      text: 'Department',
      Role: 'Admin',
      icon: 'fa-solid fa-check fs-4 me-4 ms-3 mt-2 mb-2'
    },
    {
      path: 'employee',
      text: 'Employee',
      Role: 'Admin',
      icon: 'fa-solid fa-user fs-4 me-4 ms-3 mt-2 mb-2'
    },
    {
      path: 'requestList',
      text: 'Request List',
      Role: 'Admin',
      icon: 'fa-solid fa-list fs-4 me-4 ms-3 mt-2 mb-2'

    },
    {
      path: 'user',
      text: 'User',
      Role: 'Admin',
      icon: 'fa-solid fa-user fs-4 me-4 ms-3 mt-2 mb-2'
    },
    {
      path: 'leaves',
      text: 'Leaves',
      Role: 'Admin',
      icon: 'fa-solid fa-l fs-4 me-4 ms-4 mt-2 mb-2'
    },
    {
      path: 'reports',
      text: 'Reports',
      Role: 'Admin',
      icon: 'fa-solid fa-layer-group fs-4 me-3 ms-3 mt-2 mb-2'

    },
    {
      path: 'createRequest',
      text: 'Create Request',
      Role: 'Employee',
      icon: 'fa-solid fa-list fs-4 me-4 ms-4 mt-2 mb-2'
    },
    {
      path: 'assignedRequest',
      text: 'Assigned Request',
      Role: 'AdminDept',
      icon: 'fa-solid fa-user fs-4 me-4 ms-4 mt-2 mb-2'
    },
    {
      path: 'employeeLeave',
      text: 'Leave',
      Role: 'Employee',
      icon: 'fa-solid fa-l fs-4 me-4 ms-4 mt-2 mb-2'
    },
    {
      path: 'employeeLeave',
      text: 'Leave',
      Role: 'AdminDept',
      icon: 'fa-solid fa-l fs-4 me-4 ms-4 mt-2 mb-2'
    },
    {
      path: 'adminDeptLeave',
      text: 'ApproveLeave',
      Role: 'AdminDept',
      icon: 'fa-solid fa-l fs-4 me-4 ms-4 mt-2 mb-2'
    },
    {
      path: 'adminDeptLeave',
      text: 'ApproveLeave',
      Role: 'Employee',
      icon: 'fa-solid fa-user fs-4 me-4 ms-4 mt-2 mb-2'
    },
  ]
  logedinUserName: string = ''
  constructor(private router: Router) {
    debugger
    const Role = localStorage.getItem("role");
    if (Role != null) {
      this.userRole = JSON.parse(Role);
    }
    this.filteredRoutesArray = this.routesArray.filter((m: any) => m.Role == this.userRole);
  }

  ngOnInit(): void {
    const UserName = localStorage.getItem('UserName');
    if (UserName != null) {
      this.logedinUserName = JSON.parse(UserName);
    }
  }
  logout() {
    this.router.navigateByUrl('/login');
  }
}
