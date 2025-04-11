import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationComponenteComponent } from './housing-location-componente.component';

describe('HousingLocationComponenteComponent', () => {
  let component: HousingLocationComponenteComponent;
  let fixture: ComponentFixture<HousingLocationComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocationComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
