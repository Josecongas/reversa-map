import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spot-finder',
  templateUrl: './spot-finder.component.html',
  styleUrls: ['./spot-finder.component.scss'],
})
export class SpotFinderComponent implements OnInit {
  mobileQuery: MediaQueryList;
  createOrderMode$: Observable<boolean> =
    this.deliveryService.deliveryOrderMode$;

  private _mobileQueryListener: () => void;
  isMobile: boolean;

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

  ngOnInit(): void {}
}
