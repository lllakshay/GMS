import { Component, ElementRef, ViewChild,OnInit} from '@angular/core';

import { AdminService } from 'src/app/service/admin.service';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
departments:any[]=[];
hods:any[]=[];
render:any;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllDepartment().subscribe(res=>
      {
        this.departments=res;
      
        this.departments.forEach(d=>{
          this.adminService.getHodByDepartmentName(d.departmentName).subscribe(res=>
            {
              this.render = {
                departmentId:d.departmentId,
                departmentName:d.departmentName,
                departmentTimestamp:d.departmentTimestamp,
                hodName:res.name
              }
              
              this.hods.push(this.render);
             
            },
            error=>{
              this.render = {
                departmentId:d.departmentId,
                departmentName:d.departmentName,
                departmentTimestamp:d.departmentTimestamp,
                hodName:'Not Assigned'
              }
           
              this.hods.push(this.render)
            })
        })
        console.log(this.hods)
      })

    
  }

  deleteDepartment(departmentId:number){
    
    this.adminService.deleteDepartment(departmentId).subscribe(res=>
      {
        
      })

     window.location.reload();
  }

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public SavePDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  
}  


