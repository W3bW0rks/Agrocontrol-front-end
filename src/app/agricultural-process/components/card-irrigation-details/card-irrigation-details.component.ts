import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-card-irrigation-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-irrigation-details.component.html',
  styleUrl: './card-irrigation-details.component.css'
})
export class CardIrrigationDetailsComponent {

}
