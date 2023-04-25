import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListComplaintService {
  private baseUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // getComplaints(): Observable<Data>{
  //   return this.http.get<IComplaints[]>(`${this.baseUrl}`);
      
   
      // getComplaints(): Observable<IComplaints[]> {
      //   return this.http.get<IComplaints[]>(this.complaints);
      // }

      getComplaints(userId:any): Observable<any>{
        return this.http.get(this.baseUrl +"citizen/getAllComplaints" + "/" + userId);
      }
  
      getAllComplaints(): Observable<any>{
        return this.http.get(this.baseUrl +"citizen/getAllComplaints" );
      }


    //   getComplaints():IComplaints[]{
    //  return this.complaints;
  //}
     
      sendReminder(complaintId:number): Observable<any>{
        return this.http.get(this.baseUrl + "citizen/enableComplaintReminder" + "/" +complaintId)
      }


  //  getLikeCount(data:any): Observable<any> {
  //   return this.http.get(this.baseUrl + "admin/getLikesByComplaint"+"/"+this.complaintId,data)
  //  }


   reopenComplaint(complaintId:number): Observable<any>{
     return this.http.get(this.baseUrl + "citizen/changeStatusReopen"+"/"+ complaintId)
   }

  likeComplaint(complaintId:number,userId:any): Observable<any>{
     return this.http.get(this.baseUrl + "citizen/likeById" + "/" + complaintId+"/"+userId)
   }

   
  //  addComment(userId:any,complaintId:number,comment:String):Observable<any>{
  //    console.log(complaintId)
  //    return this.http.get(this.baseUrl + "citizen/addComments/" +complaintId + "/" + userId + "/" + comment )
  //  }

   addComment( complaintId:number,userId:number, comment:string): Observable<any>{
    return this.http.post<any>(this.baseUrl + "citizen/addComments",{},{
      params:{
        complaintId: complaintId,
        userId: userId, 
        comment : comment
      }
    });
  }
   viewCommentByComplaintId(complaintId:number):Observable<any>{
     return this.http.get(this.baseUrl + "citizen/getCommentByComplaint/" +complaintId )
   }

   getLikeCount(complaintId:number){
      return this.http.get(this.baseUrl + "citizen/getLikesCount/"  + complaintId)
   }

   likedOrNot(complaintId:number,userId:number){
    return this.http.get(this.baseUrl + "citizen/likedOrNot/" + complaintId + "/"+userId);
 }
 giveRating( complaintId:number,userId:number, rating:number): Observable<any>{
  return this.http.post<any>(this.baseUrl + "citizen/giveRatingById",{},{
      params:{
        complaintId: complaintId,
        userId: userId, 
        rating : rating
      }
    });
  }
  getRatingOnComplaint(complaintId:number):Observable<any>{
    return this.http.get<any>(this.baseUrl + "citizen/getAllRatingsByComplaintId/"  + complaintId)
  }



  
}
