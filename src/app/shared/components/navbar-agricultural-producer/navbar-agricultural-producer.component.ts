import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-navbar-agricultural-producer',
  standalone: true,
  imports: [MatSidenavModule,MatIconModule, MatToolbarModule,MatButtonModule],
  templateUrl: './navbar-agricultural-producer.component.html',
  styleUrl: './navbar-agricultural-producer.component.css'
})
export class NavbarAgriculturalProducerComponent {
  isSidenavOpened = true;

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
