import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-admin-edit-hod',
  templateUrl: './admin-edit-hod.component.html',
  styleUrls: ['./admin-edit-hod.component.scss']
})
export class AdminEditHodComponent implements OnInit {
  editHod:any;
  hide1 = true;
  hide2=true;
  hodId:any;
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.hodId=this._activatedRoute.snapshot.params['id'];
    this.adminService.getHodById(this.hodId).subscribe(res=>{
      this.editHod= new FormGroup({
        hodId: new FormControl(res.userId),
        hodName : new FormControl(res.name),
        email : new FormControl(res.emailId, [Validators.required, Validators.email]),
        hodMobileNumber: new FormControl(res.userMobileNumber),
        hodUserName :new FormControl(res.userName),
        password: new FormControl(res.password),
        confirmPassword: new FormControl(res.password),
        hodAddress: new FormControl(res.userAddress)
    
      });
    })
   

  }
  updateHod(){
   
    this.adminService.editHod(this.editHod.value).subscribe(res=>{
      console.log(res);
    })
  }

}
