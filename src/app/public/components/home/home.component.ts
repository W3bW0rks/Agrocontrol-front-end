import {Component, inject, Input} from '@angular/core';
import {AgriculturalProcess} from "../../models/agricultural-process.entity";
import {AgriculturalApiService} from "../../services/agricultural-api.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fieldId: number = 1;
  agriculturalProcess!: AgriculturalProcess;
  processService: AgriculturalApiService = inject(AgriculturalApiService);
  agriculturalProcessId!: number;

  constructor() {
    this.agriculturalProcess = new AgriculturalProcess({});
  }

  onSubmit() {
    this.agriculturalProcess.fieldId = this.fieldId;
    console.log('Agricultural process', this.agriculturalProcess);
    this.processService.create(this.agriculturalProcess).subscribe((response: any) => {
      console.log('Agricultural process created', response);
      this.agriculturalProcessId = response.id;
      console.log('Agricultural process id', this.agriculturalProcessId);
      localStorage.setItem('agriculturalProcessId', this.agriculturalProcessId.toString());
    })
  }
}
