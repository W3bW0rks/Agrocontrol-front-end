import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Fields } from "../../models/fields.entity";
import { MatCard, MatCardActions, MatCardContent, MatCardImage } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { FieldsService } from "../../services/fields.service";
import { NgIf } from "@angular/common";
import { FieldFormEditComponent } from "../field-form-edit/field-form-edit.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-field-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    NgIf,
    FieldFormEditComponent
  ],
  templateUrl: './field-card.component.html',
  styleUrl: './field-card.component.css'
})
export class FieldCardComponent {
  @Input() field!: Fields;
  @Output() deleteField = new EventEmitter<void>();
  @Output() editField = new EventEmitter<void>();
  isModalOpen: boolean = false;

  fieldService: FieldsService = inject(FieldsService);

  constructor(private router: Router) {}

  onFieldDeleted(fieldId: number): void {
    this.fieldService.delete(fieldId).subscribe((response: any) => {
      console.log(`Field with ID ${fieldId} deleted successfully.`);
      this.deleteField.emit();
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onEditSuccess() {
    this.editField.emit();
    this.closeModal();
  }

  goToHome(fieldId: number) {
    this.router.navigate(['home-agricultural-process', fieldId]);
  }
}
