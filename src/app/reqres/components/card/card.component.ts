import { Component, Input } from '@angular/core';
import { Person } from '../../models/reqres';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   @Input() person: Person | undefined = undefined;
}
