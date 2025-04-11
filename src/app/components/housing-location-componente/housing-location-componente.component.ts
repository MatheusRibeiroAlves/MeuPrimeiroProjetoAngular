import { Component,Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Housinglocation } from '../../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule,],
  templateUrl: './housing-location-componente.component.html',
  styleUrl: './housing-location-componente.component.css'
})
export class HousingLocationComponenteComponent {

  @Input() housingLocation!: Housinglocation;


}
