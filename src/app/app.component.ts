import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { DeliveryService } from './services/delivery-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reversa-map';
  mobileQuery: MediaQueryList;
  createOrderMode$: Observable<boolean> =
    this.deliveryService.deliveryOrderMode$;

  private _mobileQueryListener: () => void;

  constructor(
    private media: MediaMatcher,
    private readonly deliveryService: DeliveryService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1060px)'); // Ajusta las dimensiones según tus necesidades
    this._mobileQueryListener = () => {
      // Actualiza la propiedad `isMobile` cuando cambia el tamaño de la pantalla
      this.isMobile = this.mobileQuery.matches;
    };
    // Registra un listener para ser notificado cuando cambia el tamaño de la pantalla
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    // Inicializa la propiedad `isMobile`
    this.isMobile = this.mobileQuery.matches;
  }
  isMobile: boolean;
}
