import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<any>{
    return this.http.get(this.baseUrl +"admin/getAllDepartment");

    
  }
  
  makeComplaint(userId:any,departmentId:any,complaint:any) : Observable<any>{
    console.log(this.baseUrl + "citizen/makeComplaint/"+userId+"/"+departmentId+"/"+complaint);
    return this.http.post(this.baseUrl + "citizen/makeComplaint/"+userId+"/"+departmentId+"/"+complaint,"" );
  }
}
