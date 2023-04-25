import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-edit-department',
  templateUrl: './admin-edit-department.component.html',
  styleUrls: ['./admin-edit-department.component.scss']
})
export class AdminEditDepartmentComponent implements OnInit {
hods:any[]=[];
editDepartment:any;
departmentId:any;
  constructor(private adminService: AdminService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.departmentId=this._activatedRoute.snapshot.params['id'];
    this.adminService.getDepartmentById(this.departmentId).subscribe(res=>{
      this.adminService.getAvailableHod().subscribe(res=>
      {
        this.hods=res;
      })
      this.editDepartment= new FormGroup({
        departmentName : new FormControl(res.departmentName),
        addHod : new FormControl(0),
  
    })
    
    
    })
 

    
  
}
  updateDepartment(){
    console.log(this.editDepartment.value);
 this.adminService.editDepartment(this.editDepartment.value).subscribe(res=>{
  console.log(res);
  alert(res);
  })
  }
}
