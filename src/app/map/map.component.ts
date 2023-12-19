import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { mapStyles } from '../config/mapConfig';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  position: google.maps.LatLngLiteral = { lat: 39.5, lng: -0.393 };
  center = { lng: -0.392787, lat: 39.467 };
  zoom = 14;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 17,
    minZoom: 8,
    disableDefaultUI: true,
    styles: mapStyles,
  };
  spots: Spot[] = [
    { position: { lat: 39.49, lng: -0.3763 }, label: 'A', title: 'Oro' },
    { position: { lat: 39.4697, lng: -0.3774 }, label: 'B', title: 'Plata' },
    { position: { lat: 39.44, lng: -0.376 }, label: 'C', title: 'Bronce' },
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {}

  private loadScript(url: any) {
    return new Promise((resolve, reject) => {
      const script = this.renderer2.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.text = ``;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer2.appendChild(this.document.head, script);
    });
  }
}

interface Spot {
  position: google.maps.LatLngLiteral;
  label: string;
  title: string;
}
