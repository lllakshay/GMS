import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';






@Component({
  selector: 'app-admin-unlock-account',
  templateUrl: './admin-unlock-account.component.html',
  styleUrls: ['./admin-unlock-account.component.scss']
})
export class AdminUnlockAccountComponent implements OnInit {
  displayedColumns: string[] = ['name', 'emailId', 'userName','action'];
  dataSource: any;
      
   constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
   
    this.adminService.getAllLockUser().subscribe(res=>{
      this.dataSource = new MatTableDataSource<any>(res);
    
    });
    
      
  }
  unlockUser(userId:number){
    this.adminService.unlockUser(userId).subscribe(res=>{
       this.ngOnInit();
      // alert("Unlock user successfully")
    //  this.router.navigateByUrl("admin")
    })
     this.ngOnInit();
    window.location.reload();
  }
  
 

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
