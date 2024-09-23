import {Component, inject, OnInit} from '@angular/core';
import { TableComponent} from "./components/table/table.component";
import {RouterLink} from "@angular/router";
import {IrrigationService} from "../../services/irrigation.service";
import {Worker} from "../../../fields/models/worker.entity";
import {Irrigation} from "../../models/irrigation.entity";

@Component({
  selector: 'app-irrigation-table',
  standalone: true,
  imports: [
    TableComponent,
    RouterLink
  ],
  templateUrl: './irrigation-table.component.html',
  styleUrl: './irrigation-table.component.css'
})

export class IrrigationTableComponent implements OnInit {

  private _irrigationService : IrrigationService = inject(IrrigationService);
  protected dataSource!: Array<Irrigation>;

  ngOnInit() : void  {
    this._getIrrigations();
  }

  private _getIrrigations(): void {
    this._irrigationService.getAll().subscribe((response: Array<Irrigation>) => this.dataSource = response);
  }
}
