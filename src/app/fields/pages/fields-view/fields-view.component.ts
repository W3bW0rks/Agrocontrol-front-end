import { Component } from '@angular/core';
import {CardFieldListComponent} from "../../components/card-field-list/card-field-list.component";

@Component({
  selector: 'app-fields-view',
  standalone: true,
  imports: [
    CardFieldListComponent
  ],
  templateUrl: './fields-view.component.html',
  styleUrl: './fields-view.component.css'
})
export class FieldsViewComponent {

}
