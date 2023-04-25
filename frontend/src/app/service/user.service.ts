import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  url="http://localhost:8080/user";
  private baseUrl = "http://localhost:8080/";

  getUserByUserName(username:string):Observable<any>{
    return this.httpClient.get<any>(this.url+"/getUserByUserName/"+username);
  }
  getUserByUserId(userId:any){
    return this.httpClient.get<any>(this.url+"/getUserByUserId/"+userId);
  }
 
  register(data:any) : Observable<any>{
    console.log(data)
    return this.httpClient.post(this.baseUrl + "citizen/registerUser",data );
  }

  changePassword(userId:any,newPassword:any):Observable<any>{   
    
    return this.httpClient.get(this.baseUrl + "citizen/changePassword/"+userId+"/"+ newPassword)
  }
}
