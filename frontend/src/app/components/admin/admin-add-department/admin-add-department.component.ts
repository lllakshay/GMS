import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-add-department',
  templateUrl: './admin-add-department.component.html',
  styleUrls: ['./admin-add-department.component.scss']
})
export class AdminAddDepartmentComponent implements OnInit {
  hods:any[]=[];
  addDepartment:any;
  valid=false;
  msg='';
  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.adminService.getAvailableHod().subscribe(res=>
      {
        this.hods=res;
      })
      this.addDepartment= new FormGroup({
        departmentName : new FormControl(''),
        addHod : new FormControl(0),
       
      });
      

  }
  registerDepartment(){
    this.adminService.addDepartment(this.addDepartment.value,this.addDepartment.value.addHod)
    .subscribe(res=>{
      console.log(res)
    })
    this.router.navigateByUrl("/department")
  };

  checkDepartmentName(){
    this.adminService.getDepartmentByDepartmentName(this.addDepartment.value.departmentName).subscribe(
      
      (res)=>{
        console.log("in use")
        this.valid=true;
        this.msg="Department name exists !!!"
      },
      (error)=>{
        this.valid=false;
        this.msg="Department name available"
      }
    )
  }
  
}
