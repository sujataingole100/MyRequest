import { Component, OnInit } from '@angular/core';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requestList: any[] = [];
  requestObj: any;
  departId: any;
  empArray: any[] = [];
  RequestByFilterObj: any;
  AllempArray: any[] = []
  constructor(private Ser: MyRequestService) {
    this.requestObj = {
      RequestId: '',
      AssignedTo: ''
    }
    this.RequestByFilterObj = {
      "RequestNo": "",
      "EmployeeId": 0,
      "AssignedTo": 0
    }
  }

  ngOnInit(): void {
    this.getAllRequest();
    this.getEmployeeByDeptId();
    this.getEmployee();
  }
  getAllRequest() {
    debugger
    this.Ser.GetAllRequest().subscribe((res: any) => {
      this.requestList = res;
    })
  }

  Add() {
    this.onModalOpen();
  }
  getEmployee() {
    this.Ser.getAllEmployee().subscribe((res: any) => {
      this.AllempArray = res;
    })
  }
  Assign(item: any) {
    debugger
    this.onModalOpen();
    this.requestObj.RequestId = item.RequestId;
    this.departId = item.DeptId;
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
  AssignRequest() {
    debugger
    this.Ser.AssignRequest(this.requestObj).subscribe((res: any) => {
      this.getAllRequest();
    })
  }
  getEmployeeByDeptId() {
    debugger
    this.Ser.getEmployeeByDeptId(this.departId).subscribe((res: any) => {
      this.empArray = res;
    })
  }
  GetRequestByFilter() {
    debugger
    this.Ser.GetRequestByFilter(this.RequestByFilterObj).subscribe((res: any) => {
      this.requestList = res;
    })
    this.RequestByFilterObj = {
      "RequestNo": "",
      "EmployeeId": 0,
      "AssignedTo": 0
    }
  }
  sortMode:  boolean= true;
  sort(key : string) {
    debugger;
    if(this.sortMode) {
      this.sortMode = false;
      this.requestList.sort((a: any, b: any) => a[key].localeCompare(b[key]));
    } else {
      this.sortMode = true;
      this.requestList.sort((a: any, b: any) => b[key].localeCompare(a[key]));
    }
  }
}
