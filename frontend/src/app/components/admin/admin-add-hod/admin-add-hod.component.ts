import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-add-hod',
  templateUrl: './admin-add-hod.component.html',
  styleUrls: ['./admin-add-hod.component.scss']
})
export class AdminAddHodComponent implements OnInit {
 addHod:any;
  email:any;
  hide1 = true;
  hide2=true;
  valid=false;
  msg='';
  constructor(private adminService: AdminService,private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.addHod= new FormGroup({
      hodName : new FormControl(''),
      email : new FormControl('', [Validators.required, Validators.email]),
      hodMobileNumber: new FormControl(''),
      hodUserName :new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      hodAddress: new FormControl('')
  
    });

    
  }

registerHod(){
  this.adminService.registerHod(this.addHod.value)
  .subscribe(res=>{
    console.log(res)
  },
  error=>
  {
    console.log("Duplicate Username Entry");
  })
  this.router.navigateByUrl("/adminDash")
};
checkUserName(){
  this.userService.getUserByUserName(this.addHod.value.hodUserName).subscribe(
    
    (res)=>{
      console.log("in use")
      this.valid=true;
      this.msg="Username exists !!!"
    },
    (error)=>{
      this.valid=false;
      this.msg="Username available"
    }
  )
}




  
  
  

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
