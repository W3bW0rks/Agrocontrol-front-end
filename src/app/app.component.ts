import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatepickerCalendarComponent} from "./public/components/datepicker-calendar/datepicker-calendar.component";
import {
  IrrigationSchedulerComponent
} from "./agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatepickerCalendarComponent, IrrigationSchedulerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agrocontrol-front-end';
}
