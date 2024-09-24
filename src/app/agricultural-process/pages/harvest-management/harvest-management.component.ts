import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";
import {Harvest} from "../../models/harvest.entity";
import {HarvestService} from "../../services/harvest.service";
import {
  HarvestCreateAndEditComponent
} from "../../components/harvest-create-and-edit/harvest-create-and-edit.component";
@Component({
  selector: 'app-harvest-management',
  standalone: true,
  imports: [
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatIcon,
    NgClass,
    HarvestCreateAndEditComponent
  ],
  templateUrl: './harvest-management.component.html',
  styleUrl: './harvest-management.component.css'
})
export class HarvestManagementComponent implements OnInit, AfterViewInit {
  //#region Attributes

  protected harvestData!: Harvest;
  protected columnsToDisplay: string[] = ['date', 'harvestedQuantityInKg', 'pricePerKg', 'totalIncome', 'totalWorkersCost'];
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false})
  protected sort!: MatSort;
  protected editMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;
  private harvestService: HarvestService = inject(HarvestService);

  //#endregion

  //#region Method

  constructor() {
    this.editMode = false;
    this.harvestData = new Harvest({});
    this.dataSource = new MatTableDataSource();
    console.log(this.harvestData);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllHarvests();
  }

  protected onEditItem(item: Harvest) {
    this.editMode = true;
    this.harvestData = item;
  }

  protected onDeleteItem(item: Harvest) {
    this.deleteHarvest(item.id);
  }

  protected onCancelRequested() {
    this.resetEditState();
    this.getAllHarvests();
  }

  protected onHarvestAddRequested(item: Harvest) {
    this.harvestData = item;
    this.createHarvest();
    this.resetEditState()
  }

  protected onHarvestUpdateRequested(item: Harvest) {
    this.harvestData = item;
    this.updateHarvest();
    this.resetEditState();
  }

  private resetEditState(): void {
    this.harvestData = new Harvest({});
    this.editMode = false;
  }

  private getAllHarvests() {
    this.harvestService.getAll().subscribe((response: Array<Harvest>) => this.dataSource.data = response);
  }

  private createHarvest() {
    this.harvestService.create(this.harvestData).subscribe((response: Harvest) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }

  private updateHarvest() {
    let harvestToUpdate = this.harvestData;
    this.harvestService.update(harvestToUpdate.id, harvestToUpdate).subscribe((response: Harvest) => {
      let index = this.dataSource.data.findIndex((harvest: Harvest) => harvest.id === response.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = this.dataSource.data;
    });
  }

  private deleteHarvest(id: number) {
    this.harvestService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((harvest: Harvest) => harvest.id != id);
    });
  }

}
