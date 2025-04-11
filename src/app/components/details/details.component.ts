import { Component,inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { Housinglocation } from '../../housinglocation';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [HousingService]
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  housingLocationId = -1;


  constructor() {
  
  }

  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(this.housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

}
