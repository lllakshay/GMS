import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
status='';
name=''
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage['user']){
      let data = JSON.parse(sessionStorage['user']);
      this.name=data.name;
    if(data.userRole==="ADMIN"){
      
      this.status="ADMIN";
    }
    else if (data.userRole==="DEPARTMENT_HEAD"){
      this.status="DEPARTMENT_HEAD";
    }
    else if (data.userRole==="CITIZEN"){
      this.status="CITIZEN";
    }
    }

  }
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login")
  }

}
