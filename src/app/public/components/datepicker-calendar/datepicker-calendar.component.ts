import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-calendar',
  templateUrl: './datepicker-calendar.component.html',
  styleUrl: './datepicker-calendar.component.css',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerCalendarComponent {
  selected: Date | null = null;

  getFormattedDate(): string | null {
    return this.selected ? this.selected.toDateString() : null;
  }
}
