import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {
  SidenavAgriculturalProducerComponent
} from "../../../shared/components/sidenav-agricultural-producer/sidenav-agricultural-producer.component";
import {
  NavbarAgriculturalProducerComponent
} from "../../../shared/components/navbar-agricultural-producer/navbar-agricultural-producer.component";
import {CardPlantationComponent} from "../../components/card-plantation/card-plantation.component";
import {
  CardIrrigationDetailsComponent
} from "../../components/card-irrigation-details/card-irrigation-details.component";

@Component({
  selector: 'app-home-agricultural-process',
  standalone: true,
  imports: [MatSidenavModule, SidenavAgriculturalProducerComponent, NavbarAgriculturalProducerComponent, CardPlantationComponent, CardIrrigationDetailsComponent],
  templateUrl: './home-agricultural-process.component.html',
  styleUrl: './home-agricultural-process.component.css'
})
export class HomeAgriculturalProcessComponent {
  isSidenavOpened = true;

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
