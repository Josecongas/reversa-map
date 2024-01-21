import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { mapStyles } from '../config/mapConfig';
import { Spot, _SpotType, inPostMockSpots } from '../config/spots';
import cityPaqs from '../config/citypaqs.json';
import { CityPaq } from '../models/citypaqs.interface';
import { SpotService } from '../services/spot.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  constructor(
    private cdr: ChangeDetectorRef,
    private readonly spotService: SpotService
  ) {}
  @ViewChild('map') map!: any;
  mapInstance!: google.maps.Map;
  infoWindow!: google.maps.InfoWindow;

  cityPaqs: CityPaq[] = cityPaqs;
  markers: Spot[] = [];
  markers$: Observable<Spot[]> = this.spotService.filteredSpots$;
  markerPositions: google.maps.LatLngLiteral[] = [];
  markersReady: boolean = false;
  position: google.maps.LatLngLiteral = { lat: 39.5, lng: -0.393 };
  center = { lng: -0.392787, lat: 39.467 };
  zoom = 15;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 17,
    minZoom: 14,
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

  activateSpotManuallyOnMap(spot: Spot) {
    this.spotService.activateSpotByPosition(spot);
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

  setInitialFilteredSpots() {
    this.spotService.updateSpots(this.markers, this.map.getBounds());
  }

  centerMapBySpot(spot: Spot) {
    const centerPosition: google.maps.LatLngLiteral = spot.position;
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(centerPosition);
    this.map.fitBounds(bounds);
  }

  buildMarkers(): Spot[] {
    const markers: Spot[] = [];
    // Build the Correos markers
    cityPaqs.forEach((spot: CityPaq) => {
      markers.push({
        title: spot.DESCRIPCION,
        position: {
          lat: Number(spot.LATITUD_WGS_84),
          lng: Number(spot.LONGITUD_WGS_84),
        },
        type: _SpotType.locker,
        direccion: spot.LOCALIZACION_DOMICILIO,
        logoSrc: '../../assets/correos.jpeg',
        company: 'Correos',
      });
    });
    // TODO: Update this with observable requests
    // Add the InPost markers
    markers.push(...inPostMockSpots);

    return markers;
  }

  buildInfoWindowContent(spot: Spot): string {
    const content: string = `
    <div class="map-spot-content">
    <div><img src='${spot.logoSrc}',
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

    this.spotService.onFilterSubj.subscribe(() => {
      this.spotService.updateSpots(this.markers, this.map.getBounds());
    });

    // Map ready on init
    this.map.idle.subscribe(() => {
      this.setInitialFilteredSpots();
    });
    // Active spot change
    this.spotService.activeSpot$.subscribe((spot: Spot) => {
      this.centerMapBySpot(spot);
    });
  }
}
