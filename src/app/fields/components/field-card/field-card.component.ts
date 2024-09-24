import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Fields} from "../../models/fields.entity";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {FieldsService} from "../../services/fields.service";

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
  @Output() deleteField = new EventEmitter<void>();
  @Output() editField = new EventEmitter<void>();

  fieldService : FieldsService = inject(FieldsService);

  onFieldDeleted(fieldId:number):void{
    this.fieldService.delete(fieldId).subscribe((response:any)=>{
      console.log(`Field with ID ${fieldId} deleted successfully.`);
      this.deleteField.emit();
    })
  }

  onFieldEdited(fieldId:number):void{
    console.log(fieldId);
    this.fieldService.update(fieldId,this.field).subscribe((response:any)=>{
      console.log(`Field with ID ${fieldId} updated successfully.`);
      this.editField.emit();
    })
  }

}
