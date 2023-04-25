import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.scss']
})
export class HodDashboardComponent {
  date:any; 
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { departmentName: 'Department Name', cols: 1, rows: 1 },
          
        ];
      }

      return [
        { departmentName: 'Department Name', cols: 2, rows: 1 },
        
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
  data = JSON.parse(sessionStorage['user']);

  name = this.data.name;
  departmentName = this.data.departmentName;
}
