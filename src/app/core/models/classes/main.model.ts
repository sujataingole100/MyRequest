export class loginClass {
  UserId: number;
  Role: string;
  UserName: string;
  Password: string;
  ReportsTo: number;
  EmployeeId: number;
  Token: string;
  constructor() {
    this.UserId = 0;
    this.Role = '';
    this.UserName = '';
    this.Password = '';
    this.ReportsTo = 0;
    this.EmployeeId = 0;
    this.Token = '';
  }
}

export class userClass {
  UserName: string;
  Password: string;

  constructor() {
    this.UserName = '';
    this.Password = '';
  }
}

export class department {
  DeptId: number;
  DeptName: string;
  DeptHead: string;
  CreatedDate: Date;

  constructor() {
    this.DeptId = 0;
    this.DeptName = "";
    this.DeptHead = '';
    this.CreatedDate = new Date;
  }
}
export class employee {
  EmployeeId: number
  EmpoyeeName: string;
  ConactNo: string;
  EmalId: string;
  DepId: number
  constructor() {
    this.EmployeeId = 0;
    this.EmpoyeeName = '';
    this.ConactNo = '';
    this.EmalId = '';
    this.DepId = 0
  }
}
export class createRequest {

  RequestId: number;
  RequestNo: string;
  EmployeeId: number;
  CreatedDate: Date;
  ExpectedEndDate: Date;
  Severity: string;
  DeptId: number;
  CompletedDate: Date;
  AssignedTo: number;
  State: string;
  RequestDetails: string;

  constructor() {
    this.RequestId = 0;
    this.RequestNo = '';
    this.EmployeeId = 0;
    this.CreatedDate = new Date();
    this.ExpectedEndDate = new Date();
    this.Severity = '';
    this.DeptId = 0;
    this.CompletedDate = new Date();
    this.AssignedTo = 0;
    this.State = '';
    this.RequestDetails = '';
  }

}
export class leaves{
    LeaveId: number;
    EmployeeId: any;
    FromDate: Date;
    ToDate: Date;
    IsHalfDay: boolean;
    NoOfDays: number;
    LeaveType: string;
    Details: string;
    IsApproved: boolean;
    ApprovedDate: Date
    constructor(){
      this.LeaveId=0;
      this.EmployeeId= 0;
      this.FromDate= new Date();
      this.ToDate= new Date();
      this.IsHalfDay= false;
      this.NoOfDays= 0;
      this.LeaveType= '';
      this.Details= '';
      this.IsApproved= false;
      this.ApprovedDate= new Date()
    }
}

export class createEmployee{
  EmployeeId: number;
  EmployeeName: string;
  ContactNo: string;
  EmailId: string;
  Role: string;
  UserName: string;
  Password: string;
  DeptId: number;
  ReportsTo: number

  constructor(){
    this.EmployeeId= 0;
    this.EmployeeName= '';
    this.ContactNo= '';
    this.EmailId= '';
    this.Role= '';
    this.UserName= '';
    this.Password= '';
    this.DeptId= 0;
    this.ReportsTo= 0
  }
}

