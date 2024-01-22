import { Component, OnInit } from '@angular/core';
import { SpotService } from 'src/app/services/spot.service';

@Component({
  selector: 'app-spots-sidebar-filter',
  templateUrl: './spots-sidebar-filter.component.html',
  styleUrls: ['./spots-sidebar-filter.component.scss'],
})
export class SpotsSidebarFilterComponent implements OnInit {
  constructor(private readonly spotService: SpotService) {}

  ngOnInit(): void {}

  toggleLockerFilter(filter: string) {
    this.spotService.setFilters(filter);
  }
}
