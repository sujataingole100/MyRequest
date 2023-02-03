import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/core/models/classes/main.model';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  deptObj: department;
  heading: string = "Departments";
  deptArray: any[] = [];
  constructor(private Ser: MyRequestService) {
    this.deptObj = new department();
  }

  headArray = [
    {
      head: 'Department Name',
      fieldName: 'DeptName'
    },
    {
      head: 'Department Head',
      fieldName: 'DeptHead'
    },
    {
      head: 'Action',
      fieldName: ''
    }
  ]
  ngOnInit(): void {
    this.getAllDepartments();
  }
  getAllDepartments() {
    debugger;
    this.Ser.getAllDepartments().subscribe((res: any) => {
      this.deptArray = res;
    })
  }
  editDepartment(item: any) {
    debugger
    this.onModalOpen();
    this.Ser.GetDepartmentById(item.DeptId).subscribe((res: any) => {
      this.deptObj = res;
    })
  }
  deleteDepartment(item: any) {
    debugger
    this.Ser.deleteDeparment(item.DeptId).subscribe((res: any) => {
      this.getAllDepartments();
    })
  }
  createDepartment() {
    this.Ser.createDepartment(this.deptObj).subscribe((res: any) => {
      this.getAllDepartments();
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
  GetDepartmentById() {

  }
  updateDepartment() {
    debugger
    this.Ser.UpdateDepartment(this.deptObj, this.deptObj.DeptId).subscribe((res: any) => {
      this.getAllDepartments();
    })
  }
  Cancel() {
    this.deptObj = new department();
  }
}
