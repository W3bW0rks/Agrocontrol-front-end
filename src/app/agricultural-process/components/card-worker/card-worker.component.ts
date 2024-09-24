import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-worker',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButton,],
  templateUrl: './card-worker.component.html',
  styleUrl: './card-worker.component.css'
})
export class CardWorkerComponent {
  @Input()
  nameWorkers: string[] = []

  constructor(private router: Router) {
  }

  goToWorkerManagement() {
    this.router.navigate(['/worker-management']);
  }
}
