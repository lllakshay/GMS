import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HodService } from 'src/app/service/hod.service';

@Component({
  selector: 'app-hod-view-reminder',
  templateUrl: './hod-view-reminder.component.html',
  styleUrls: ['./hod-view-reminder.component.scss']
})
export class HodViewReminderComponent implements OnInit {

  constructor(private hodService: HodService,private router:Router) { }
  department:any;
  complaint:any; 
  data:any
  departmentName:any; 

  ngOnInit(): void {
    this.data = JSON.parse(sessionStorage['user']);
    this.departmentName = this.data.departmentName;
    this.hodService.getReminderComplaints(this.departmentName).subscribe(res=>{
    
    this.complaint=res;
    console.log(this.complaint)
  })
 

}
completeComplaint(complaintId:any){
  this.hodService.updateComplaintStatus(complaintId).subscribe(res=>{
   console.log("successfull completed")

  

  })
 // this.ngOnInit();
  this.router.navigateByUrl("/viewComplaint");
 }
}
