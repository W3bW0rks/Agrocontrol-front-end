import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Worker} from "../../models/worker.entity";
import {NgIf} from "@angular/common";
import {WorkersFieldTableComponent} from "../workers-field-table/workers-field-table.component";

@Component({
  selector: 'app-workers-table-pop-up',
  standalone: true,
  imports: [
    NgIf,
    WorkersFieldTableComponent
  ],
  templateUrl: './workers-table-pop-up.component.html',
  styleUrl: './workers-table-pop-up.component.css'
})
export class WorkersTablePopUpComponent {
  @Input() workers!: Array<Worker>;
  @Input() isPopupVisible!: boolean;
  @Output() close = new EventEmitter<void>();

  closePopUp() {
    this.close.emit();
  }
}
