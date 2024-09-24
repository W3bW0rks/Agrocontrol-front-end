import { Component, Input, OnInit } from '@angular/core';
import { Fields } from "../../models/fields.entity";
import { FieldsService } from "../../services/fields.service";
import { FieldCardComponent } from "../field-card/field-card.component";
import { CommonModule } from '@angular/common';
import { MatButton } from "@angular/material/button";
import { FieldFormComponent } from "../field-form/field-form.component";
import { MatIconModule } from "@angular/material/icon";
import { Router } from "@angular/router";

@Component({
  selector: 'app-card-field-list',
  standalone: true,
  imports: [
    CommonModule,
    FieldCardComponent,
    MatButton,
    FieldFormComponent,
    MatIconModule
  ],
  templateUrl: './card-field-list.component.html',
  styleUrls: ['./card-field-list.component.css']
})
export class CardFieldListComponent implements OnInit {
  fields: Fields[] = [];
  @Input() currentUserId!: number;
  isModalOpen: boolean = false;
  isEditModalOpen: boolean = false; // Nueva variable para manejar el modal de edición
  selectedFieldId!: number; // ID del campo seleccionado para editar

  constructor(private fieldService: FieldsService, private router: Router) {}

  ngOnInit(): void {
    this.loadCurrentUserId(); // Carga el userId desde localStorage
    this.loadFields();
  }

  loadCurrentUserId(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      this.currentUserId = userObj.id; // Asigna el userId desde el objeto almacenado en localStorage
    } else {
      console.log('No user found in localStorage');
    }
  }

  loadFields(): void {
    if (this.currentUserId) {
      this.fieldService.getAll().subscribe({
        next: (data) => {
          this.fields = data.filter((field) => field.userId === this.currentUserId);
        },
        error: (error) => {
          console.log('Error fetching fields:', error);
        }
      });
    } else {
      console.log('User ID not set');
    }
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onFieldAdded(): void {
    this.loadFields();
    this.closeModal();
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  onFieldEdited(): void {
    this.loadFields();
    this.closeEditModal();
  }

  reload() {
    this.loadFields();
  }

  goToHome(fieldId: number) {
    this.router.navigate(['home-agricultural-process', fieldId]);
  }
}
