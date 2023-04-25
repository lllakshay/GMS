import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HodService {
  url="http://localhost:8080/hod";
  constructor(private httpClient:HttpClient) { }

  getAllComplaints(departmentName:any):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getAllComplaints/"+departmentName);
  }
  getReminderComplaints(departmentName:any):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getReminderComplaints/"+departmentName);
  }
  updateComplaintStatus(complaintId:number){
    return this.httpClient.get<any>(this.url+"/completeComplaint/"+complaintId);
  }
  getComplaintById(complaintId:any){
    console.log(complaintId);
    return this.httpClient.get<any>(this.url+"/getComplaintById/"+complaintId);
  }

  getAllDepartent(){
    return this.httpClient.get<any>(this.url+"/getAllDepartment");
  }

  transferComplaint(complaintId:any,departmentId:any){
    return this.httpClient.get<any>(this.url+"/transferComplaint/"+complaintId+"/"+departmentId);
  }
  updatePassword(userId:any,newPassword:string){
    
    return this.httpClient.get<any>(this.url+"/changePassword/"+userId+"/"+newPassword);
  }
}
