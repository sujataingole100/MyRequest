import { Component, OnInit } from '@angular/core';
import { leaves } from 'src/app/core/models/classes/main.model';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.css']
})
export class EmployeeLeaveComponent implements OnInit {
  leavesObj: leaves;
  leavesArray: any[] = [];

  constructor(private Ser: MyRequestService) {
    this.leavesObj = new leaves();
  }

  ngOnInit(): void {
    this.GetAllLeavesByEmployeeId();
  }
  AddLeave() {
    debugger
    const id = localStorage.getItem("empId");
    this.leavesObj.EmployeeId = id;
    if (id != null) {
      this.Ser.AddLeave(this.leavesObj).subscribe((res: any) => {
        this.GetAllLeavesByEmployeeId = res;
      })
      this.leavesObj = new leaves();
    }
    this.GetAllLeavesByEmployeeId();
  }
  GetAllLeavesByEmployeeId() {
    debugger
    const id = localStorage.getItem("empId");
    if (id != null) {
      this.Ser.GetAllLeavesByEmployeeId(id).subscribe((res: any) => {
        this.leavesArray = res;
      })
    }
  }
  sortMode:  boolean= true;
  sort(key : string) {
    debugger;
    if(this.sortMode) {
      this.sortMode = false;
      this.leavesArray.sort((a: any, b: any) => a[key].localeCompare(b[key]));
    } else {
      this.sortMode = true;
      this.leavesArray.sort((a: any, b: any) => b[key].localeCompare(a[key]));
    }
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

  Add() {
    this.onModalOpen();
  }
  ApproveLeave(item: any) {

  }
}
