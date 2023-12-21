import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { mapStyles } from '../config/mapConfig';
import { Spot, spots } from '../config/spots';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map') map!: any;
  @ViewChild(MapInfoWindow, { static: false })
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
      content: spot.title,
      position: spot.position,
    });
    console.log(this.infoWindow.getPosition());

    this.infoWindow.open(this.mapInstance);
  }
}
