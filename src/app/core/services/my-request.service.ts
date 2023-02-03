import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyRequestService {
  api: string = '';

  constructor(private http: HttpClient) {
    this.api = environment.apiEndPoint;
  }
  getLogin(obj: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/Login", obj);
  }
  getAllDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.api + "MyRequest/GetDepartments");
  }
  createDepartment(Obj: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/CreateDepartment", Obj);
  }
  deleteDeparment(id: number): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/DeleteDepartment?id=" + id, id);
  }

  getAllEmployee(): Observable<any> {
    return this.http.get<any>(this.api + "MyRequest/GetEmployees")
  }
  createEmployee(Obj: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/CreateEmployee", Obj);
  }
  getEmployeeByDeptId(id: number): Observable<any> {

    return this.http.get<any>(this.api + "MyRequest/GetEmployeeByDeptId?id=" + id);
  }
  getAllUser(): Observable<any[]> {
    return this.http.get<any[]>(this.api + "MyRequest/GetUsers");
  }

  GetAllRequestByEmployee(id: any): Observable<any> {
    return this.http.get<any[]>(this.api + "MyRequest/GetAllRequestByEmployee?id=" + id);
  }
  CreateRequestMaster(Obj: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/CreateRequestMaster", Obj);
  }
  deleteRequestMaster(id: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/DeleteRequestMaster?id=" + id, id);
  }
  GetAllRequest(): Observable<any> {
    return this.http.get<any[]>(this.api + "MyRequest/GetAllRequest");
  }
  AssignRequest(Obj: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/AssignRequest", Obj);
  }
  GetRequestByFilter(Obj: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/GetRequestByFilter", Obj);
  }
  GetAssignedRequestByUserId(id: any): Observable<any> {
    return this.http.get<any>(this.api + "MyRequest/GetAssignedRequestByUserId?userid=" + id)
  }
  startRequest(id: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/startRequest?id=" + id, id);
  }
  closeRequest(id: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/closeRequest?id=" + id, id);
  }
  AddLeave(Obj: any): Observable<any> {
    return this.http.post<any>(this.api + "MyRequest/AddLeave", Obj);
  }
  GetAllLeavesByEmployeeId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.api + 'MyRequest/GetAllLeavesByEmployeeId?id=' + id);
  }
  GetLeavesForApprovalBySuperwiserId(id: any): Observable<any> {
    return this.http.get<any>(this.api + "MyRequest/GetLeavesForApprovalBySuperwiserId?id=" + id);
  }
  ApproveLeave(id:any):Observable<any>{
    return this.http.post<any>(this.api+"MyRequest/ApproveLeave?id="+id,'');
  }
  GetAllLeaves():Observable<any[]>{
    return this.http.get<any[]>(this.api+"MyRequest/GetAllLeaves");
  }
  UpdateDepartment(Obj:any,id:any):Observable<any>{
    debugger
    return this.http.post<any>(this.api+"MyRequest/UpdateDepartment?id="+id,Obj);
  }
  GetDepartmentById(id:any):Observable<any>{
    return this.http.get<any[]>(this.api+"MyRequest/GetDepartmentById?id="+id);
  }
  GetEmployeeById(id:any):Observable<any>{
    return this.http.get<any>(this.api+"MyRequest/GetEmployeeById?id="+id)
  }
  UpdateEmployee(Obj:any,id:any):Observable<any>{
    debugger
    return this.http.post<any>(this.api+"MyRequest/UpdateEmployee?id="+id,Obj);
  }
  UpdateRequestMaster(Obj:any,id:any):Observable<any>{
    debugger
    return this.http.post<any>(this.api+"MyRequest/UpdateRequestMaster?id="+id,Obj);
  }
  getAdmminDashboard():Observable<any[]>{
    debugger
    return this.http.get<any[]>(this.api+'MyRequest/getAdmminDashboard');
  }
  GetEmpDashboardById(id:any):Observable<any[]>{
    debugger
    return this.http.get<any[]>(this.api+'MyRequest/GetEmpDashboardById?id='+id);
  }
  GetAdminDeptDashboardById(id:any):Observable<any[]>{
    debugger
    return this.http.get<any[]>(this.api+'MyRequest/GetAdminDeptDashboardById?id='+id);
  }
}
