import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDepartment } from '../utilities/IDepartment';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

url="http://localhost:8080/admin";

  constructor(private httpClient:HttpClient) { 
    
  }
  
  registerHod(addHod:any):Observable<any>{
    console.log(addHod)
    return this.httpClient.post<any>(this.url+"/addHod",addHod);

  }
  getAllHod():Observable<any>{
    return this.httpClient.get<any>(this.url+"/getAllHod");
  }
  getAvailableHod():Observable<any>{
    return this.httpClient.get<any>(this.url+"/getAvailableHod");
  }
  getAllLockUser():Observable<any>{

    return this.httpClient.get<any>(this.url+"/getAllLockUser");
    
  }
  addDepartment(addDepartment:any,hodId:number):Observable<any>{
    console.log(addDepartment)
    return this.httpClient.post<any>(this.url+"/addDepartment/"+hodId,addDepartment);

  }

  unlockUser(userId:number):Observable<any>{
    console.log(userId);
    return this.httpClient.get<any>(this.url+"/unlockAccount/"+userId);
  }
  deleteHod(userId:number):Observable<any>{
    return this.httpClient.delete<any>(this.url+"/removeHod/"+userId);
  }
  editHod(user:any):Observable<any>{
     return this.httpClient.put<any>(this.url+"/editHod",user);
  }
  getHodById(userId:number):Observable<any>{
   
    return this.httpClient.get<any>(this.url+"/getHod/"+userId);
  }
  getAllDepartment():Observable<any>{
   
    return this.httpClient.get<any>(this.url+"/getAllDepartment");
  }
  getHodByDepartmentName(departmentName:any):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getHodByDepartmentName/"+departmentName);
  }
  deleteDepartment(departmentId:any):Observable<any>{
    return this.httpClient.delete<any>(this.url+"/removeDepartment/"+departmentId);
  }
  editDepartment(department:any):Observable<any>{
    return this.httpClient.put<any>(this.url+"/editDepartment",department);
  }

  getDepartmentById(departmentId:number):Observable<any>{
   
    return this.httpClient.get<any>(this.url+"/getDepartment/"+departmentId);
  }
  getAllComplaints():Observable<any>{
    return this.httpClient.get<any>(this.url+"/getAllComplaints");
  }
  getDepartmentByDepartmentName(departmentName:string):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getDepartmentByDepartmentName/"+departmentName);
  }
  getCommentByComplaintId(complaintId:any):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getCommentsByComplaintId/"+complaintId);
  }

    getLikeByComplaintId(complaintId:any):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getLikesByComplaintId/"+complaintId);
  }

  getAllFeedback():Observable<any>{
    return this.httpClient.get<any>(this.url+"/getFeedbacks")
  }
  
}
