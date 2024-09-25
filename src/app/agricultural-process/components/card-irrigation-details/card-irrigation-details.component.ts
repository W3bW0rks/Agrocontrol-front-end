import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Irrigation } from "../../models/irrigation.entity";
import {CommonModule, DatePipe} from "@angular/common";

@Component({
  selector: 'app-card-irrigation-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DatePipe,CommonModule],
  templateUrl: './card-irrigation-details.component.html',
  styleUrls: ['./card-irrigation-details.component.css']
})
export class CardIrrigationDetailsComponent implements OnChanges {
  @Input() irrigation!: Irrigation | null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['irrigation']) {
      console.log('Irrigation updated:', this.irrigation);
    }
  }
}
