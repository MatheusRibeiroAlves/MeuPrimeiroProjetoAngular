import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponenteComponent } from '../housing-location-componente/housing-location-componente.component';
import { Housinglocation } from '../../housinglocation';
import { HousingService } from '../../housing.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocationComponenteComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList: Housinglocation[] =[]; 
  housingService: HousingService = inject(HousingService);

    
    constructor(){
      this.housingLocationList = this.housingService.getAllHousingLocations();
    }
  


 
}
