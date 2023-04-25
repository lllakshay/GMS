import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HodService } from 'src/app/service/hod.service';
import { IViewComplaint } from 'src/app/utilities/IViewComplaint';

@Component({
  selector: 'app-hod-view-complaint',
  templateUrl: './hod-view-complaint.component.html',
  styleUrls: ['./hod-view-complaint.component.scss']
})
export class HodViewComplaintComponent implements OnInit {

  
  
  department:any;
  complaint:any; 
  data:any;
  departmentName:any;
  
  
  
 
   constructor(private hodService: HodService, private router:Router) { }

  ngOnInit(): void {
    this.data = JSON.parse(sessionStorage['user']);
    this.departmentName = this.data.departmentName;
    this.hodService.getAllComplaints(this.departmentName).subscribe(res=>{
    this.department=res.object1;
    this.complaint=res.object2;  
      
  })
 
  
 

 
  }
 completeComplaint(complaintId:any){
  this.hodService.updateComplaintStatus(complaintId).subscribe(res=>{
   console.log("successfull completed")
  })
  window.location.reload();
 }
}
