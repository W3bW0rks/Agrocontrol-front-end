import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CardIrrigationDetailsComponent
} from "./agricultural-process/components/card-irrigation-details/card-irrigation-details.component";
import {IrrigationFormComponent} from "./agricultural-process/components/irrigation-form/irrigation-form.component";
import {CardPlantationComponent} from "./agricultural-process/components/card-plantation/card-plantation.component";
import {
  NavbarAgriculturalProducerComponent
} from "./shared/components/navbar-agricultural-producer/navbar-agricultural-producer.component";
import {
  HomeAgriculturalProcessComponent
} from "./agricultural-process/pages/home-agricultural-process/home-agricultural-process.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agrocontrol-front-end';
}
