import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url ="http://localhost:8080/user"
  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

  login(userName: string, password: string) {
    const body = {
      userName: userName,
      password: password
    }
    return this.httpClient.post(this.url+"/authenticateUser" , body)
  }

  getOtp(emailId:string) {
     return this.httpClient.get(this.url+"/getotp/"+emailId)
  }
}
