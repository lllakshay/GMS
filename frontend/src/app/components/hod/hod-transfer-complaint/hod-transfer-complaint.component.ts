import { Component, OnInit } from '@angular/core';
import { HodService } from 'src/app/service/hod.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hod-transfer-complaint',
  templateUrl: './hod-transfer-complaint.component.html',
  styleUrls: ['./hod-transfer-complaint.component.scss']
})
export class HodTransferComplaintComponent implements OnInit {
departmentName:any[]=[];
complaintId:any;
trnsferComplaint:any;
  constructor(private hodService: HodService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.complaintId=this._activatedRoute.snapshot.params['cid'];
    this.hodService.getComplaintById(this.complaintId).subscribe(res=>{
      console.log(res);
      this.hodService.getAllDepartent().subscribe(response=>{
      this.departmentName=response;
      console.log(this.departmentName)
    })

     this.trnsferComplaint= new FormGroup({
        complaintDescription : new FormControl(res.complaintDescription),
        addDepartment : new FormControl(0),
  
    })
    })
   
  }
  transferDepartment(){
    
 this.hodService.transferComplaint(this.complaintId,this.trnsferComplaint.value.addDepartment).subscribe(res=>{
  console.log("sucessfully transfer")
  })
  }

}
