import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { mapStyles } from '../config/mapConfig';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
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
      strokeWeight: 0, // No hay borde
    },
    title: 'Mi marcador', // Título del marcador (puedes omitir esto si no deseas un título)
  });

  // Define el color que deseas para el marcador (en formato hexadecimal)
  // var markerColor = '#FF0000'; // Por ejemplo, rojo

  spots: Spot[] = [
    {
      position: { lat: 39.49, lng: -0.3763 },
      label: 'A',
      title: 'Oro',
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, // Puedes usar otros símbolos predeterminados
        fillColor: '#eeeeee', // Establece el color del marcador
        fillOpacity: 1, // Establece la opacidad del color del marcador (de 0 a 1)
        strokeWeight: 0, // No hay borde
      },
    },
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
  icon?: any;
}
