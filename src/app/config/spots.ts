export interface Spot {
  position: google.maps.LatLngLiteral;
  title: string;
  type: _SpotType;
  direccion?: string;
  label?: string;
  icon?: any;
  options?: any;
  logoSrc?: string;
  active?: boolean;
  company?: string;
}

export enum _SpotType {
  locker = 'Smart locker',
  pudo = 'Establecimiento',
}

export const inPostMockSpots: Spot[] = [
  {
    position: { lat: 39.49, lng: -0.3963 },
    title: 'InPost point 1',
    type: _SpotType.pudo,
    logoSrc: '../../assets/inpost.png',
    direccion: 'Calle de ejemplo Nº 7',
    options: {
      icon: {
        url: '../../assets/location-pin.webp',
        scaledSize: { width: 90, height: 90 },
      },
    },
    company: 'InPost',
  },
];
