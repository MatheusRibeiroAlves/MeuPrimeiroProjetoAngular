import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { Housinglocation } from '../../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [HousingService]
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  housingLocationId = -1;

  applyForm = new FormGroup({ 
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(this.housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}