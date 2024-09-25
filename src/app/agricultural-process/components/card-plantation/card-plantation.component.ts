import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { AgriculturalProcess } from "../../models/agricultural-process.entity";
import { DatePipe } from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-plantation',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTableModule, DatePipe],
  templateUrl: './card-plantation.component.html',
  styleUrls: ['./card-plantation.component.css']
})
export class CardPlantationComponent {
  displayedColumns: string[] = ['plantType', 'quantity', 'startDate', 'endDate'];

  // Recibimos el proceso agrícola como input
  @Input()
  agriculturalProcess: AgriculturalProcess = {
    id: 1,
    userId: 123,
    plantType: 'Carrots',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2023-10-01'),
    isFinished: false,
    details: 'First planting season'
  };

  agriculturalProcessId: number = 1;
  constructor(private router: Router) {
  }
  createPlanting() {
    this.router.navigate(['/seeding-registration']);
    // this.agriculturalProcess.startDate = new Date(); // Fecha actual
    // localStorage.setItem('agriculturalProcessId', this.agriculturalProcessId.toString());
    // console.log(`agriculturalProcessId stored: ${this.agriculturalProcessId}`);
    // console.log(`Start Date set to: ${this.agriculturalProcess.startDate}`);
  }

  // Método para finalizar la plantación y actualizar la fecha de fin
  finishPlanting() {
    this.agriculturalProcess.endDate = new Date(); // Fecha actual
    console.log(`Finish Date set to: ${this.agriculturalProcess.endDate}`);
  }
}
