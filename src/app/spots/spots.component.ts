import { Component, OnInit } from '@angular/core';
import { Spot } from '../config/spots';
import { Observable } from 'rxjs';
import { SpotService } from '../services/spot.service';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss'],
})
export class SpotsComponent {
  spots$: Observable<Spot[]> = this.spotService.filteredSpots$;
  spots2$: Observable<Spot[]> = this.spotService.getInpostPoints();
  constructor(private readonly spotService: SpotService) {}
}
