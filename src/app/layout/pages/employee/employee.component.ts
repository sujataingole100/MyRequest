import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createEmployee, employee } from 'src/app/core/models/classes/main.model';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeObj: employee;
  search: any;
  EmployeeObj: createEmployee;
  selectedDet: any;
  employeArray: any[] = [];
  FilteredEmployeArray: any[] = [];
  deptArray: any[] = [];
  empByDeptArray: any[] = [];
  deptId: number = 0
  headArray: any[] = [
    {
      head: 'Employee Name',
      fieldName: 'EmployeeName'
    },
    {
      head: 'Contact No',
      fieldName: 'ContactNo'
    },
    {
      head: 'EmailId',
      fieldName: 'EmailId'
    },
    {
      head: 'Dept Id',
      fieldName: 'DeptId'
    },
    {
      head: 'Action',
      fieldName: ''
    }
  ]
  empForm: FormGroup;
  DapartmentId: any
  EmpoyeeId: any = 0
  constructor(private Ser: MyRequestService) {
    this.EmployeeObj = new createEmployee;
    this.employeeObj = new employee();
    this.empForm = new FormGroup({
      EmployeeName: new FormControl(''),
      ContactNo: new FormControl(''),
      EmailId: new FormControl(''),
      Role: new FormControl(''),
      UserName: new FormControl(''),
      Password: new FormControl(''),
      DeptId: new FormControl(0),
      ReportsTo: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllDepartment();
  }
  getAllEmployee() {
    debugger
    this.Ser.getAllEmployee().subscribe((res: any) => {
      this.employeArray = res;
      this.FilteredEmployeArray = res;
    })
  }
  editEmployee(item: any) {
    this.onModalOpen();
    this.EmployeeObj = item;
  }
  deleteEmployee(item: any) {

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
  getAllDepartment() {
    this.Ser.getAllDepartments().subscribe((res: any) => {
      this.deptArray = res
    })
  }
  AddEmployee() {
    debugger
    this.Ser.createEmployee(this.EmployeeObj).subscribe((res: any) => {
      this.getAllEmployee();
    })
    this.EmployeeObj = new createEmployee();
  }
  updateEmployee() {
    this.Ser.UpdateEmployee(this.EmployeeObj, this.EmployeeObj.EmployeeId).subscribe((res: any) => {
      this.getAllEmployee();
    })
  }
  clear() {

  }
  selectDept() {
    debugger
    //  const id = this.deptId;
    // const id = this.empForm.controls['DeptId'].value;

    this.Ser.getEmployeeByDeptId(this.EmployeeObj.DeptId).subscribe((res: any) => {
      this.empByDeptArray = res;
    })
  }
  OnFilter(event: any) {
    debugger
    this.FilteredEmployeArray = this.employeArray.filter((element:any) => {
      let search =event;
      let values = Object.values(element);
      let flag = false
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(search) > -1) {
          flag = true;
          return;
        }
      })
      if (flag) {
        return element
      }
    });
  }

}
