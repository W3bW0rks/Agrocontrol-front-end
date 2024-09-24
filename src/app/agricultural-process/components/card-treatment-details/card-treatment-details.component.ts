import {Component, Input, SimpleChanges} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardTitle} from "@angular/material/card";
import {Treatment} from "../../models/treatment.entity";

@Component({
  selector: 'app-card-treatment-details',
  standalone: true,
    imports: [
        DatePipe,
        MatButton,
        MatCard,
        MatCardActions,
        MatCardTitle
    ],
  templateUrl: './card-treatment-details.component.html',
  styleUrl: './card-treatment-details.component.css'
})
export class CardTreatmentDetailsComponent {
  @Input() treatment!: Treatment | null;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['treatments']) {
      console.log('Irrigation updated:', this.treatment);
    }
  }

}
