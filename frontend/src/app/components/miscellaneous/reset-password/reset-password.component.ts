import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HodService } from 'src/app/service/hod.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
password='';
confirmPassword='';

  constructor(private hodService:HodService,private router:Router) { }
  data = JSON.parse(sessionStorage['user']);
  userId= this.data.userId;
  ngOnInit(): void {

  }
  changePassword(){
 
    this.hodService.updatePassword(this.userId,this.password).subscribe(res=>{
     
      
    })
    sessionStorage.removeItem('user')
    this.router.navigateByUrl("/login");
    
    
  }
  returnToHome(){  
    this.router.navigateByUrl("")
}


}
