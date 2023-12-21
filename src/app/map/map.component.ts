import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { mapStyles } from '../config/mapConfig';
import { Spot, spots } from '../config/spots';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map') map!: any;
  mapInstance!: google.maps.Map;
  infoWindow!: google.maps.InfoWindow;

  markers: Spot[] = spots;
  markerPositions: google.maps.LatLngLiteral[] = [];

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
    this.setupMap();
    this.markers.forEach((marker) => {
      this.markerPositions.push(marker.position);
    });
    console.log(this.markerPositions);
  }

  setupMap() {
    this.mapInstance = this.map.googleMap;
    this.infoWindow = new google.maps.InfoWindow();
  }
  openInfo(spot: Spot) {
    this.infoWindow.close();

    this.infoWindow = new google.maps.InfoWindow({
      content: this.buildInfoWindowContent(spot),
      position: spot.position,
      pixelOffset: new google.maps.Size(0, -70),
    });
    console.log(this.infoWindow.getPosition());

    this.infoWindow.open(this.mapInstance);
  }

  buildInfoWindowContent(spot: Spot): string {
    const content: string = `
    <div class="map-spot-content">
    <div><img src=${spot.logoSrc} width="60px" height="60px"></img></div>
    <div>
    <p><h2>${spot.title}</h2></p>
    </div>
    </div>
    `;
    return content;
  }
}
