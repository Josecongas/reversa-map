import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { mapStyles } from '../config/mapConfig';
import { Spot, spots } from '../config/spots';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  spots: Spot[] = spots;
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

  markerPosition = { lat: -34.397, lng: 150.644 };
  marker = new google.maps.Marker({
    position: this.markerPosition,
    // map: map, // Asigna el mapa en el que se colocará el marcador
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, // Puedes usar otros símbolos predeterminados
      fillColor: '#DDDDDD', // Establece el color del marcador
      fillOpacity: 1, // Establece la opacidad del color del marcador (de 0 a 1)
      strokeWeight: 0, // No hay borde,
      scaledSize: new google.maps.Size(10, 10),
    },
    title: 'Mi marcador', // Título del marcador (puedes omitir esto si no deseas un título)
  });

  // Define el color que deseas para el marcador (en formato hexadecimal)
  // var markerColor = '#FF0000'; // Por ejemplo, rojo

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
