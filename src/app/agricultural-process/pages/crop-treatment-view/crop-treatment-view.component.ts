import {Component, inject, OnInit} from '@angular/core';
import { CropTreatment } from "../../models/crop-treatment.entity";
import { RouterLink } from "@angular/router";
import {CropTreatmentTableComponent} from "../../components/crop-treatment-table/crop-treatment-table.component";
import {CropTreatmentService} from "../../services/crop-treatment.service";

@Component({
  selector: 'app-crop-treatment-view',
  standalone: true,
  imports: [
    RouterLink,
    CropTreatmentTableComponent
  ],
  templateUrl: './crop-treatment-view.component.html',
  styleUrl: './crop-treatment-view.component.css'
})

export class CropTreatmentViewComponent implements OnInit {

  private _cropTreatmentService : CropTreatmentService = inject(CropTreatmentService);
  protected dataSource!: Array<CropTreatment>;

  ngOnInit() : void  {
    this._getCropTreatments();
  }

  private _getCropTreatments(): void {
    this._cropTreatmentService.getAll().subscribe((response: Array<CropTreatment>) => this.dataSource = response);
  }
}
