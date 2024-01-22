import { Component, OnInit } from '@angular/core';
import { SpotService } from '../services/spot.service';
import { _SpotType } from '../config/spots';

@Component({
  selector: 'app-filters-overmap',
  templateUrl: './filters-overmap.component.html',
  styleUrls: ['./filters-overmap.component.scss'],
})
export class FiltersOvermapComponent implements OnInit {
  lockerVisibility: boolean = true;
  pudoVisibility: boolean = true;

  constructor(private readonly spotService: SpotService) {}

  ngOnInit(): void {}

  toggleLockerFilter() {
    this.lockerVisibility = !this.lockerVisibility;
    this.spotService.setFilters('locker');
  }

  togglePudoFilter() {
    this.pudoVisibility = !this.pudoVisibility;
    this.spotService.setFilters('pudo');
  }
}
