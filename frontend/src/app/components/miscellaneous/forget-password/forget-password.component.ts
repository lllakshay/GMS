import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
inUserName='';
status=false;
msg='';
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }
  forgetPassword(){
    this.userService.getUserByUserName(this.inUserName).subscribe(res=>{
      sessionStorage["user"]=JSON.stringify(res);
      this.router.navigateByUrl("resetPassword")
      
    },
    error=>{
      this.status=true;
      this.msg="User doesn't exist"
    }) 
  }

  returnToHome(){  
      this.router.navigateByUrl("")
  }

}
