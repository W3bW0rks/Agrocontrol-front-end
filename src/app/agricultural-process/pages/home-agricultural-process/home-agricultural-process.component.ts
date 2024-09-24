import { Component, ElementRef, inject, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavAgriculturalProducerComponent } from "../../../shared/components/sidenav-agricultural-producer/sidenav-agricultural-producer.component";
import { NavbarAgriculturalProducerComponent } from "../../../shared/components/navbar-agricultural-producer/navbar-agricultural-producer.component";
import {HomeViewComponent} from "../home-view/home-view.component";
@Component({
  selector: 'app-home-agricultural-process',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidenavAgriculturalProducerComponent,
    NavbarAgriculturalProducerComponent,
    HomeViewComponent
  ],
  templateUrl: './home-agricultural-process.component.html',
  styleUrls: ['./home-agricultural-process.component.css']
})
export class HomeAgriculturalProcessComponent {
  isSidenavOpened = true;
  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
