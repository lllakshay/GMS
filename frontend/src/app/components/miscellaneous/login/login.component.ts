import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'inspector';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide1 = true;
  login:any;
  user:any;
  status=false;
  msg='';
  remember_me=false;
  siteKey:string="6Lf6iHYdAAAAAN-IDGFeC0SlqrWOJzcF9908tpxS";
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.login=new FormGroup({
      
      userName :new FormControl(''),
      password: new FormControl(''),
      recaptcha: new FormControl(null,[Validators.required])
  
    });
    if (localStorage['user']) {
      sessionStorage['user'] = localStorage['user'];
    }
  }
  submit(){
    console.log("in submit")
   this.loginService.login(this.login.value.userName,this.login.value.password).subscribe(res=>{
    console.log("valid") 
    console.log(res)
    this.user=res;
    if (this.remember_me) {
      // localStorage['user'] = JSON.stringify(response['data']);
      localStorage['user'] = res;
    }
    if(this.user.userRole==="ADMIN"){
      sessionStorage["user"]=JSON.stringify(this.user);
      this.router.navigateByUrl("/adminDash")
    }

    else if(this.user.userRole==="CITIZEN"){
      this.loginService.getOtp(this.user.emailId).subscribe(response=>{
        sessionStorage["otp"]=response;
        sessionStorage["email"]=this.user.emailId;
        sessionStorage["userId"]=this.user.userId;
        this.router.navigateByUrl("/otp");
    })
    
    }
    
    else if(this.user.userRole==="DEPARTMENT_HEAD"){
      this.loginService.getOtp(this.user.emailId).subscribe(response=>{
        sessionStorage["otp"]=response;
        sessionStorage["email"]=this.user.emailId;
        sessionStorage["userId"]=this.user.userId;
        this.router.navigateByUrl("/otp");
    })
    
    }
   
     
   },
   (error)=>{
     console.log(error);
    if(error.status===200){
      this.router.navigate(["/otp"]);
    }
     if(error.status===403){
      this.msg="Account is lock";
      this.status=true;
       console.log("Account is lock")
     }
     if(error.status===401){
       this.msg="Invalid login credential";
       this.status=true;
       console.log("Invalid login credential")
     }
   })

  }
  rememberMe(event: any) {
    if (event.target.checked) {
      this.remember_me = true;
    } else {
      this.remember_me = false;
    }
    console.log(this.remember_me);
  }

}
