import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-view-log',
  templateUrl: './admin-view-log.component.html',
  styleUrls: ['./admin-view-log.component.scss']
})
export class AdminViewLogComponent implements OnInit {
viewLog:any[]=[];
comments:any[]=[];
likes:any[]=[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllComplaints().subscribe(res=>
      {
        this.viewLog=res;
      }) 
  }
  viewComment(complaintId:any){
    
    this.adminService.getCommentByComplaintId(complaintId).subscribe(res=>{
      
      this.comments=res;
         
    })
  }
   viewLike(complaintId:any){
    
    this.adminService.getLikeByComplaintId(complaintId).subscribe(res=>{
      
      this.likes=res;
         
    })
  }

}
