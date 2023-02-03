import { Component, OnInit } from '@angular/core';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userArray: any[] = [];
  headArray: any[] = [
    {
      head: 'Role',
      fieldName: 'Role',
    },
    {
      head: 'UserName',
      fieldName: 'UserName',
    },
    {
      head: 'Password',
      fieldName: 'Password',
    },
    {
      head: 'ReportsTo',
      fieldName: 'ReportsTo',
    },
  ];
  constructor(private Ser: MyRequestService) {}

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.Ser.getAllUser().subscribe((res: any) => {
      this.userArray = res;
    });
  }
  EditUser(item: any) {}
  deleteUser(item: any) {}
}
