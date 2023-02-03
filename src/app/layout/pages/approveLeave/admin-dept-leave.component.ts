import { Component, OnInit } from '@angular/core';
import { leaves } from 'src/app/core/models/classes/main.model';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-admin-dept-leave',
  templateUrl: './admin-dept-leave.component.html',
  styleUrls: ['./admin-dept-leave.component.css']
})
export class AdminDeptLeaveComponent implements OnInit {

  leavesObj: leaves;
  leavesArray: any[] = [];
  constructor(private Ser: MyRequestService) {
    this.leavesObj = new leaves();
  }

  ngOnInit(): void {
    this.GetLeavesForApprovalBySuperwiserId();
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
  OnCancel() {
    this.leavesObj = new leaves();
  }
  GetLeavesForApprovalBySuperwiserId() {
    debugger
    const id = localStorage.getItem("empId");
    if (id != null) {
      this.Ser.GetLeavesForApprovalBySuperwiserId(id).subscribe((res: any) => {
        this.leavesArray = res;
      })
    }
  }
  Add() {
    this.onModalOpen();
  }
  ApproveLeave(item: any) {
    debugger
    const leaveId = item;
    this.Ser.ApproveLeave(leaveId).subscribe((res: any) => {
      this.GetLeavesForApprovalBySuperwiserId();
    })
  }
}
