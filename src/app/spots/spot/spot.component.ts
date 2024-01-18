import { Component, Input } from '@angular/core';
import { Spot } from 'src/app/config/spots';
import { SpotService } from 'src/app/services/spot.service';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
})
export class SpotComponent {
  @Input() spot!: Spot;

  constructor(private readonly spotService: SpotService) {}

  activateSpot() {
    this.spotService.activateSpotByPosition(this.spot);
  }
}
