export const mapStyles: any = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.country',
    elementType: 'labels',
    stylers: [{ color: '#d59563' }, { visibility: 'off' }],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels',
    stylers: [{ color: '#d59563' }, { visibility: 'off' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }, { visibility: 'off' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }, // Oculta las etiquetas de las carreteras de alta velocidad
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }, // Oculta las etiquetas de las carreteras locales
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'off' }, // Oculta las etiquetas de las carreteras
    ],
  },

  {
    featureType: 'road',
    elementType: 'labels.text',
    stylers: [
      { visibility: 'on' }, // Muestra los nombres de las calles
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      { visibility: 'off' }, // Oculta las etiquetas de las carreteras de alta velocidad
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text',
    stylers: [
      { visibility: 'off' }, // Oculta las etiquetas de las carreteras arteriales
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text',
    stylers: [
      { visibility: 'on' }, // Oculta las etiquetas de las carreteras locales
    ],
  },
  {
    featureType: 'transit.station',
    stylers: [
      { visibility: 'off' }, // Oculta las etiquetas de las estaciones de tránsito
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    stylers: [
      { visibility: 'off' }, // Oculta las paradas de transporte público
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }, { visibility: 'off' }],
  },

  {
    featureType: 'poi.business',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi.medical',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text',
    stylers: [
      { visibility: 'off' }, // Oculta los nombres de los distritos
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text',
    stylers: [
      { visibility: 'off' }, // Oculta los nombres de los barrios
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text',
    stylers: [
      { visibility: 'off' }, // Oculta el texto de las líneas de transporte, que incluye los ferris
    ],
  },
];

export const contentString: string = '<div class="map-spot-content"> </div>';
