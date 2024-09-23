import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Fields} from "../../models/fields.entity";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-field-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './field-card.component.html',
  styleUrl: './field-card.component.css'
})
export class FieldCardComponent {
  @Input() field!: Fields;
  @Output() editField= new EventEmitter<Fields>();
  @Output() deleteField= new EventEmitter<number>;

  onEditField(){
    this.editField.emit(this.field)
  }
  onDeleteField(){
    this.deleteField.emit(this.field.id)
  }

}
