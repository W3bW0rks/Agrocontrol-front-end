import {Component, inject, OnInit} from '@angular/core';
import {IrrigationService} from "../../services/irrigation.service";
import {Irrigation} from "../../models/irrigation.entity";
import {RouterLink} from "@angular/router";
import {IrrigationTableComponent} from "../../components/irrigation-table/irrigation-table.component";

@Component({
  selector: 'app-irrigation-view',
  standalone: true,
  imports: [
    RouterLink,
    IrrigationTableComponent
  ],
  templateUrl: './irrigation-view.component.html',
  styleUrl: './irrigation-view.component.css'
})

export class IrrigationViewComponent implements OnInit{

  private _irrigationService : IrrigationService = inject(IrrigationService);
  protected dataSource!: Array<Irrigation>;

  ngOnInit() : void  {
    this._getIrrigations();
  }

  private _getIrrigations(): void {
    this._irrigationService.getAll().subscribe((response: Array<Irrigation>) => this.dataSource = response);
  }

}
