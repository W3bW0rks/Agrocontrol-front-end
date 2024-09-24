import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardFieldListComponent} from "./fields/components/card-field-list/card-field-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardFieldListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agrocontrol-front-end';
}
