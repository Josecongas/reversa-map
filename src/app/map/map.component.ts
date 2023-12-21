import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { mapStyles } from '../config/mapConfig';
import { Spot, spots } from '../config/spots';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map') map!: google.maps.Map;
  markers: Spot[] = spots;

  position: google.maps.LatLngLiteral = { lat: 39.5, lng: -0.393 };
  center = { lng: -0.392787, lat: 39.467 };
  zoom = 14;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 17,
    minZoom: 8,
    disableDefaultUI: true,
    styles: mapStyles,
  };

  ngAfterViewInit() {
    console.log(this.map);
  }
}
