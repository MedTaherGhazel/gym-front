import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Programs } from '../programs';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="programs.photo" alt="Exterior photo of {{programs.name}}">
    <h2 class="listing-heading">{{ programs.name }}</h2>
    <p class="listing-location">{{ programs.city}}, {{programs.state }}</p>
  </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {
  @Input() programs!: Programs;
}
