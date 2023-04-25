import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
inotp=0;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  validateOtp(){
    console.log("in validate otp")
    const otp =sessionStorage.getItem("otp");
    const userId=sessionStorage.getItem("userId")
    console.log("OTp: "+otp)//right
    
     const checkOtp = (otp)?parseInt(otp):0
     
     if(checkOtp==this.inotp){
      {
        this.userService.getUserByUserId(userId).subscribe(res=>{
          console.log(res);
          sessionStorage["user"]=JSON.stringify(res);

         if(res.userRole=="DEPARTMENT_HEAD"){
           sessionStorage.removeItem("otp");
            this.router.navigate(["/hodDash"])
          }
          else if(res.userRole=="CITIZEN"){
            sessionStorage.removeItem("otp");
             this.router.navigate(["/home"])
           }
        })
      }
     
    }
    
  
  }

}
