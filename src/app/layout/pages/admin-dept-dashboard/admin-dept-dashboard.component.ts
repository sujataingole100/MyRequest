import { Component, OnInit } from '@angular/core';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-admin-dept-dashboard',
  templateUrl: './admin-dept-dashboard.component.html',
  styleUrls: ['./admin-dept-dashboard.component.css']
})
export class AdminDeptDashboardComponent implements OnInit {
  dashArray: any;
  constructor(private Ser: MyRequestService) { }

  ngOnInit(): void {
    this.getAdmminDashboard();
  }
  getAdmminDashboard() {
    debugger
    const id = localStorage.getItem('empId');
    if (id != null) {
      this.Ser.GetAdminDeptDashboardById(id).subscribe((res: any) => {
        this.dashArray = res;
      })
    }

  }
}
