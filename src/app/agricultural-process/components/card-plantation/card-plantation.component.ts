import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { AgriculturalProcedure } from "../../models/agricultural-procedure.entity";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-card-plantation',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTableModule, DatePipe],
  templateUrl: './card-plantation.component.html',
  styleUrls: ['./card-plantation.component.css']
})
export class CardPlantationComponent {
  displayedColumns: string[] = ['plantType', 'quantity', 'startDate', 'endDate'];

  // Este es el arreglo que será mostrado en la tabla
  dataSource: AgriculturalProcedure[] = [
    new AgriculturalProcedure({
      id: 1,
      userId: 123,
      plantType: 'Carrots',
      starDate: new Date('2023-09-01'),
      endDate: new Date('2023-10-01'),
      isFinished: false,
      details: 'First planting season'
    }),
    // Agrega más instancias según sea necesario
  ];

  // Aquí puedes agregar más métodos si se necesitan en el componente
}
