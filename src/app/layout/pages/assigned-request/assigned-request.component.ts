import { Component, OnInit } from '@angular/core';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-assigned-request',
  templateUrl: './assigned-request.component.html',
  styleUrls: ['./assigned-request.component.css']
})
export class AssignedRequestComponent implements OnInit {
  myrequest: any = []
  OldState: string = ''
  state: string = ''
  RequestId: any;
  employeeName: any;
  EmployeeId: any;
  constructor(private Ser: MyRequestService) { }

  ngOnInit(): void {
    this.GetAllRequestByEmployee();
    this.GetAssignedRequestByUserId();
  }
  GetAllRequestByEmployee() {
    debugger
    const Id = localStorage.getItem('empId');
    if (Id != null) {
      this.Ser.GetAllRequestByEmployee(Id).subscribe((res: any) => {
        this.myrequest = res;
      })
    }

  }
  GetAssignedRequestByUserId() {
    debugger
    const UserId = localStorage.getItem('empId');
    if (UserId != null) {
      this.Ser.GetAssignedRequestByUserId(UserId).subscribe((res: any) => {
        this.myrequest = res;
      })
    }
  }
  OpenRequest(item: any) {
    this.onModalOpen();
    this.RequestId = item.RequestId;
    this.OldState = item.State;
  }

  onModalOpen() {
    const modal = document.getElementById("addClientModal");
    if (modal != null) {
      modal.style.display = "block";
    }
  }
  onModalClose() {
    const modal = document.getElementById("addClientModal");
    if (modal != null) {
      modal.style.display = "none";
    }
  }

  ChangeStatus() {
    debugger
    if (this.OldState !== 'Close') {
      if (this.state == 'In-Progress') {
        this.Ser.startRequest(this.RequestId).subscribe((res: any) => {
          this.GetAssignedRequestByUserId();
        })
      }
      else if (this.state == 'Close') {
        this.Ser.closeRequest(this.RequestId).subscribe((res: any) => {
          this.GetAssignedRequestByUserId();
        })
      }
    }

  }
}
