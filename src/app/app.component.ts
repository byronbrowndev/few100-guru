import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // Element name. <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front End Web 100'

  upcomingHolidays = [
    'Christmas',
    'New Years'
  ]

  addHoliday(holiday: string) {
    this.upcomingHolidays = [holiday, ...this.upcomingHolidays];
  }

  removeHoliday(holiday: string) {
    this.upcomingHolidays =
      this.upcomingHolidays.filter(h => h !== holiday)
  }
}
