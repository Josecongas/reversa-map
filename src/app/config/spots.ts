const getRandomPositionInValencia = () => {
  const valenciaCenter = { lat: 39.4699, lng: -0.3763 }; // Coordenadas del centro de Valencia
  const radius = 0.05; // Radio en grados para simular ubicaciones aleatorias cercanas a Valencia

  // Fórmulas para generar una posición aleatoria dentro de un radio específico
  const lat = valenciaCenter.lat + (Math.random() - 0.5) * 2 * radius;
  const lng = valenciaCenter.lng + (Math.random() - 0.5) * 2 * radius;

  return { lat, lng };
};

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
// Generar 50 puntos adicionales con posiciones y direcciones aleatorias
export const inPostMockSpots: Spot[] = Array.from(
  { length: 50 },
  (_, index) => {
    const randomPosition = getRandomPositionInValencia();
    return {
      position: randomPosition,
      title: `InPost point ${index + 2}`, // Empezando desde el punto 2
      type: _SpotType.pudo,
      logoSrc: '../../assets/inpost.png',
      direccion: `Dirección de ejemplo Nº ${index + 2}`,
      options: {
        icon: {
          url: '../../assets/blue-pin.webp',
          scaledSize: { width: 90, height: 90 },
        },
      },
      company: 'InPost',
    };
  }
);
