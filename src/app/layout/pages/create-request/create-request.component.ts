import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createRequest } from 'src/app/core/models/classes/main.model';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  myRequest: any[] = [];
  createRequest: createRequest;
  empId: any;
  headArray = [
    {
      head: 'Request No',
      fieldName: 'RequestNo'
    },
    {
      head: 'State',
      fieldName: 'State'
    },
    {
      head: 'Severity',
      fieldName: 'Severity'
    },
    {
      head: 'Expected End Date',
      fieldName: 'ExpectedEndDate'
    },
    {
      head: 'Completed Date',
      fieldName: 'CompletedDate'
    },
    {
      head: 'Assigned UserName',
      fieldName: 'AssignedUserName'
    },
    {
      head: 'Dept Name',
      fieldName: 'DeptName'
    },
    {
      head: 'Action',
      fieldName: ''
    }
  ]
  form: FormGroup;
  deptArray: any[] = [];
  requestObj: createRequest;
  constructor(private Ser: MyRequestService) {
    this.createRequest = new createRequest();
    this.form = new FormGroup({
      RequestId: new FormControl(0),
      RequestNo: new FormControl(''),
      EmployeeId: new FormControl(0),
      CreatedDate: new FormControl(new Date()),
      ExpectedEndDate: new FormControl(new Date()),
      Severity: new FormControl('', [Validators.required]),
      DeptId: new FormControl(0, [Validators.required]),
      CompletedDate: new FormControl(new Date()),
      AssignedTo: new FormControl(''),
      State: new FormControl(''),
      RequestDetails: new FormControl('', [Validators.required]),
    })
    this.requestObj = new createRequest();
  }

  ngOnInit(): void {
    this.getRequest();
    this.getAllDept();
  }
  getRequest() {
    debugger
    const id = localStorage.getItem('empId');
    this.Ser.GetAllRequestByEmployee(id).subscribe((res: any) => {
      this.myRequest = res;
    })
  }
  CreateRequest() {
    debugger
    const empID = localStorage.getItem('empId');
    if (empID != null) {
      const requestObj = this.form.value;
      console.log(requestObj);
      requestObj.EmployeeId = empID
      this.Ser.CreateRequestMaster(requestObj).subscribe((res: any) => {
        this.getRequest();
      })
      this.form = new FormGroup({
        RequestId: new FormControl(0),
        RequestNo: new FormControl(''),
        EmployeeId: new FormControl(0),
        CreatedDate: new FormControl(new Date()),
        ExpectedEndDate: new FormControl(new Date()),
        Severity: new FormControl(''),
        DeptId: new FormControl(0),
        CompletedDate: new FormControl(new Date()),
        AssignedTo: new FormControl(''),
        State: new FormControl(''),
        RequestDetails: new FormControl(''),
      })
    }
  }
  updateRequest() {
    debugger
    this.Ser.UpdateRequestMaster(this.form.value, this.form.controls['EmployeeId'].value).subscribe((res: any) => {
      this.getRequest();
    })
  }
  editRequest(item: any) {
    this.onModalOpen();
    debugger
    this.form = new FormGroup({
      RequestId: new FormControl(item.RequestId),
      RequestNo: new FormControl(item.RequestNo),
      EmployeeId: new FormControl(item.EmployeeId),
      CreatedDate: new FormControl(item.CreatedDate),
      ExpectedEndDate: new FormControl(item.ExpectedEndDate),
      Severity: new FormControl(item.Severity),
      DeptId: new FormControl(item.DeptId),
      CompletedDate: new FormControl(item.CompletedDate),
      AssignedTo: new FormControl(item.AssignedTo),
      State: new FormControl(item.State),
      RequestDetails: new FormControl(item.RequestDetails),
    })

  }
  deleteRequest(item: any) {
    debugger
    this.Ser.deleteRequestMaster(item.RequestId).subscribe((res: any) => {
      this.getRequest();
    })
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
  getAllDept() {
    this.Ser.getAllDepartments().subscribe((res: any) => {
      this.deptArray = res;
    })
  }
  OnCancel() {
    this.onModalClose();
  }

}
