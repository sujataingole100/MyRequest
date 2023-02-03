import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginClass, userClass } from 'src/app/core/models/classes/main.model';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj: loginClass;
  userObj: userClass;
  loginArray: any = []
  constructor(private mainSer: MyRequestService, private router: Router) {
    this.loginObj = new loginClass();
    this.userObj = new userClass();
  }

  ngOnInit(): void {
  }
  getLogin() {
    debugger
    this.mainSer.getLogin(this.userObj).subscribe((result: any) => {
      this.loginObj = result;
      localStorage.setItem("token", JSON.stringify(this.loginObj.Token));
      localStorage.setItem("UserName", JSON.stringify(this.loginObj.UserName));
      localStorage.setItem('role', JSON.stringify(this.loginObj.Role));
      localStorage.setItem('empId', JSON.stringify(this.loginObj.EmployeeId));
      localStorage.setItem('UserId', JSON.stringify(this.loginObj.UserId));
      this.router.navigateByUrl("/dashboard");
    })
  }

}
