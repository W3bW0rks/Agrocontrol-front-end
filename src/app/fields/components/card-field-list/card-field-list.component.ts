import {Component, Input, OnInit} from '@angular/core';
import {Fields} from "../../models/fields.entity";
import {FieldsService} from "../../services/fields.service";
import {FieldCardComponent} from "../field-card/field-card.component";
import { CommonModule } from '@angular/common';
import {MatButton} from "@angular/material/button";
import {FieldFormComponent} from "../field-form/field-form.component";


@Component({
  selector: 'app-card-field-list',
  standalone: true,
  imports: [
    CommonModule,
    FieldCardComponent,
    MatButton,
    FieldFormComponent
  ],
  templateUrl: './card-field-list.component.html',
  styleUrl: './card-field-list.component.css'
})
export class CardFieldListComponent implements OnInit{
  type:string='Add';
  fields: Fields[]=[];
  @Input() currentUserId!:number;
  isModalOpen:boolean=false;

  constructor(private fieldService:FieldsService) {
  }

  ngOnInit(): void {
        this.loadFields();
    }

  loadFields():void{
    this.fieldService.getAll().subscribe({
      next:(data)=>{
        this.fields = data.filter((field)=>field.userId=== this.currentUserId);
      },
      error: (error)=>{
        console.log('Error fetching fields:', error);
      }
    });
  }

  openModal(): void {
    this.isModalOpen = true;
    this.type='Add';
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onFieldAdded(): void {
    this.loadFields();
    this.closeModal();
  }


  protected readonly open = open;

  editModal() {
    this.isModalOpen = true;
    this.type = 'Edit';
  }

  reload() {
    this.loadFields();
  }
}
