import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  NgZone,
  ViewChild,
} from '@angular/core';
import { mapStyles } from '../config/mapConfig';
import { Spot } from '../config/spots';
import cityPaqs from '../config/citypaqs.json';
import { CityPaq } from '../models/citypaqs.interface';
import { SpotService } from '../services/spot.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  constructor(
    private cdr: ChangeDetectorRef,
    private readonly spotService: SpotService,
    private zone: NgZone
  ) {}
  @ViewChild('map') map!: any;
  mapInstance!: google.maps.Map;
  infoWindow!: google.maps.InfoWindow;

  cityPaqs: CityPaq[] = cityPaqs;
  markers: Spot[] = [];
  markerPositions: google.maps.LatLngLiteral[] = [];
  markersReady: boolean = false;
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

  markerOptions: any = {
    icon: {
      url: '../../assets/location-pin.webp',
      scaledSize: { width: 90, height: 90 },
    },
  };

  ngAfterViewInit() {
    this.setupMap();
    this.markers = this.buildMarkers();
    this.setInitialSpots();
    this.markers.forEach((marker) => {
      this.markerPositions.push(marker.position);
    });
    this.markersReady = true;
    this.listenMapEvents();
    this.cdr.detectChanges();
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
    this.infoWindow.open(this.mapInstance);
  }

  setInitialSpots() {
    this.spotService.setInitialSpots(this.markers);
  }

  buildMarkers(): Spot[] {
    const markers: Spot[] = [];
    cityPaqs.forEach((spot: CityPaq) => {
      markers.push({
        title: spot.DESCRIPCION,
        position: {
          lat: Number(spot.LATITUD_WGS_84),
          lng: Number(spot.LONGITUD_WGS_84),
        },
        direccion: spot.LOCALIZACION_DOMICILIO,
        logoSrc: '../../assets/correos.jpeg',
      });
    });

    return markers;
  }

  buildInfoWindowContent(spot: Spot): string {
    const content: string = `
    <div class="map-spot-content">
    <div><img src='../../assets/correos.jpeg',
 width="60px" height="60px"></img></div>
    <div>
    <p><h3>${spot.title}</h3></p>
    <p><${spot.direccion}</p>
    </div>
    </div>
    `;
    return content;
  }

  listenMapEvents() {
    // Drag end
    this.map.mapDragend.subscribe(() => {
      this.spotService.updateSpots(this.markers, this.map.getBounds());
    });

    // Zoom changed
    this.map.zoomChanged.subscribe(() => {
      this.spotService.updateSpots(this.markers, this.map.getBounds());
    });
  }
}
