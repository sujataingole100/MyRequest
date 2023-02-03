import { Component, OnInit } from '@angular/core';
import { MyRequestService } from 'src/app/core/services/my-request.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leavesArray: any = [];
  empArray: any[] = []
  constructor(private Ser: MyRequestService) { }

  ngOnInit(): void {
    this.GetAllLeaves();
    this.getAllEmployee();
  }
  GetAllLeaves() {
    debugger
    this.Ser.GetAllLeaves().subscribe((res: any) => {
      this.leavesArray = res;
    })
  }
  getAllEmployee() {
    this.Ser.getAllEmployee().subscribe((res: any) => {
      this.empArray = res;
    })
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
}
