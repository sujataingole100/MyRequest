import { Component, OnInit } from '@angular/core';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dashArray: any;
  constructor(private Ser: MyRequestService) { }

  ngOnInit(): void {
    this.getAdmminDashboard();
  }
  getAdmminDashboard() {
    debugger
    this.Ser.getAdmminDashboard().subscribe((res: any) => {
      this.dashArray = res;
    })
  }
}
