import { Component, OnInit } from '@angular/core';
import { ListComplaintService } from '../../../service/list-complaint.service';
import {DataSource} from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.scss']
})


export class ListComplaintsComponent implements OnInit {

  result:any;    
  complaintList:any ={complaint_reminder:''}
  data = JSON.parse(sessionStorage['user']);
  userId = this.data.userId;  
  commentList:any;  
  comment :string =''
  likeCount:any;
  modalComplaintNo:number=0;
  modalDescription:string="";
  modalTitle:string="";
  modalStatus:string="";
  liked:any;
  starRating:number=0;
  ratingList:any;
  constructor(private listComplaintService:ListComplaintService) {   }

    ngOnInit(): void {
      this.data = JSON.parse(sessionStorage['user']);
      this.userId = this.data.userId
      this.getUserComplaints();
      
    }
    getUserComplaints(){
      this.listComplaintService.getComplaints(this.userId).subscribe((response)=>{
        this.complaintList = response;         
      });
    }
    sendRemainder (complaintId:number) {    
      this.listComplaintService.sendReminder(complaintId).subscribe((result)=>{
        console.log(result);
        alert("Reminder Sent successfully");
      })   
    }

    reopen(complaintId:number){  
      this.listComplaintService.reopenComplaint(complaintId).subscribe((result)=>{
        alert("Complaint Re-Opened successfully");
        this.getUserComplaints();
      })
    }
    calculateDiff(dateSent:Date, complaintNo:number){  
      console.log(dateSent) 
      let currentDate = new Date();
      dateSent = new Date(dateSent);
      if ( Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24)) >= 2){
        this.sendRemainder(complaintNo);
      }
      else{
        alert("You can send reminder after 2 days of complaining");
      }
    }
    setModal(complaint:any){
    
      this.modalDescription = complaint.complaintDescription;
      this.modalComplaintNo = complaint.complaintId;
      // this.modalTitle = complaint.title;
      this.modalStatus =  complaint.status;
console.log("in set modal:"+this.modalComplaintNo);
console.log(this.userId)
      this.getComments( this.modalComplaintNo);
      this.getRatings(this.modalComplaintNo);
      this.getLikesCount(this.modalComplaintNo);
      // this.getDislikesCount(complaint.complaintNo);
      this.getLikeorNot(this.modalComplaintNo);
      // this.getDislikeByUser(complaint.complaintNo);
    }

    getLikeorNot(complaintId: number){
      this.listComplaintService.likedOrNot(complaintId,this.userId).subscribe((result)=>{
        console.log(result);
        this.liked = result;       
      })
    }
    getLikesCount(complaintId: number) {
      this.listComplaintService.getLikeCount(complaintId).subscribe((result)=>{
        console.log(result);
        this.likeCount = result;       
      })
    }

    addComment(complaintId:number){  
      if(this.comment === ''){
        alert("comment cannot be empty");
      }  
      else{
        this.listComplaintService.addComment(complaintId,this.userId,this.comment).subscribe((result)=>{ 
          this.comment = '';          
          this.getComments(complaintId);    
          
        })
      }      
    }
    getComments(complaintId:number){
      this.listComplaintService.viewCommentByComplaintId(complaintId).subscribe((result)=>{
        this.commentList = result;       
      })
    }
    addLike(complaintId:number){
      this.listComplaintService.likeComplaint(complaintId,this.userId).subscribe((result)=>{
        this.getLikeorNot(complaintId);
        this.getLikesCount(complaintId);
      })
    }

    addRating(complaintId:number){  
      console.log("rating"+complaintId)
      console.log("rating"+this.userId)
      console.log("rating"+this.starRating)
        this.listComplaintService.giveRating(complaintId,this.userId,this.starRating).subscribe((result)=>{            
          this.getRatings(complaintId);  
 
        })     
    }
    getRatings(complaintId: number){
      this.listComplaintService.getRatingOnComplaint(complaintId).subscribe((result)=>{
        console.log(result);
        this.ratingList = result;       
      })
    }
}

