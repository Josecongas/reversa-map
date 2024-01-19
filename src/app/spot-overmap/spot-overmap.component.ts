import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Spot, _SpotType } from '../config/spots';
import { SpotService } from '../services/spot.service';

@Component({
  selector: 'app-spot-overmap',
  templateUrl: './spot-overmap.component.html',
  styleUrls: ['./spot-overmap.component.scss'],
})
export class SpotOvermapComponent {
  _SpotType = _SpotType;
  activeSpot$: Observable<Spot> = this.spotService.activeSpot$;
  constructor(private readonly spotService: SpotService) {}
}
