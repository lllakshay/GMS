import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent {
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
}
