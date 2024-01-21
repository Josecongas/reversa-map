import { Component, OnInit } from '@angular/core';
import { SpotService } from '../services/spot.service';

@Component({
  selector: 'app-filters-overmap',
  templateUrl: './filters-overmap.component.html',
  styleUrls: ['./filters-overmap.component.scss'],
})
export class FiltersOvermapComponent implements OnInit {
  constructor(private readonly spotService: SpotService) {}

  ngOnInit(): void {}

  setFilters(filters: any) {
    this.spotService.setFilters(filters);
  }
}
