import { Component, OnInit } from '@angular/core';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  dashArray: any;
  constructor(private Ser: MyRequestService) { }

  ngOnInit(): void {
    this.getAdmminDashboard();
  }
  getAdmminDashboard() {
    debugger
    const id = localStorage.getItem('empId');
    if (id != null) {
      this.Ser.GetEmpDashboardById(id).subscribe((res: any) => {
        this.dashArray = res;
      })
    }
  }
}
