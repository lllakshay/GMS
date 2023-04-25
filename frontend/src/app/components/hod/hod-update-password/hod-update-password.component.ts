import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HodService } from 'src/app/service/hod.service';

@Component({
  selector: 'app-hod-update-password',
  templateUrl: './hod-update-password.component.html',
  styleUrls: ['./hod-update-password.component.scss']
})
export class HodUpdatePasswordComponent implements OnInit {

  updatePassword:any;
  
  hide1 = true;
  hide2=true;
  constructor(private hodService:HodService) { }
  data = JSON.parse(sessionStorage['user']);

  userId = this.data.userId;
 
  ngOnInit(): void {
    
    this.updatePassword= new FormGroup({
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
     
  
    });

    
  }

changePassword(){
 
  this.hodService.updatePassword(this.userId,this.updatePassword.value.password).subscribe(res=>{
    
  })
 
  
};


}
