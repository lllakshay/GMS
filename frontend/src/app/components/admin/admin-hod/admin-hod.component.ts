import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-admin-hod',
  templateUrl: './admin-hod.component.html',
  styleUrls: ['./admin-hod.component.scss']
})
export class AdminHodComponent implements OnInit {

  hods:any[]=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllHod().subscribe(res=>
      {
        this.hods=res;
      })  
     
  }
  deleteHod(userId:number){
    console.log("in Delete O");
    this.adminService.deleteHod(userId).subscribe(res=>
      {
        console.log("in Delete");
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
