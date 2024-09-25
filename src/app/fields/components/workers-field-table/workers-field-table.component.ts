import {Component, Input} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Worker} from "../../models/worker.entity";
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-workers-field-table',
  standalone: true,
  imports: [MatTableModule, NgFor],
  templateUrl: './workers-field-table.component.html',
  styleUrl: './workers-field-table.component.css'
})
export class WorkersFieldTableComponent {
  displayedColumns: string[] = ['id', 'fullName', 'phone', 'documentNumber'];
  @Input() workers!: Array<Worker>;
}
