import { Component } from '@angular/core';
import {CardFieldListComponent} from "../../components/card-field-list/card-field-list.component";
import {
  NavbarAgriculturalProducerComponent
} from "../../../public/components/navbar-agricultural-producer/navbar-agricultural-producer.component";

@Component({
  selector: 'app-fields-view',
  standalone: true,
  imports: [
    CardFieldListComponent,
    NavbarAgriculturalProducerComponent
  ],
  templateUrl: './fields-view.component.html',
  styleUrl: './fields-view.component.css'
})
export class FieldsViewComponent {

}
