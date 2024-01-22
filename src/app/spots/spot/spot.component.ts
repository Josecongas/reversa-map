import { Component, Input } from '@angular/core';
import { Spot, _SpotType } from 'src/app/config/spots';
import { DeliveryService } from 'src/app/services/delivery-service.service';
import { SpotService } from 'src/app/services/spot.service';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
})
export class SpotComponent {
  @Input() spot!: Spot;

  constructor(
    private readonly spotService: SpotService,
    private readonly deliveryService: DeliveryService
  ) {}

  activateSpot() {
    this.spotService.activateSpotByPosition(this.spot);
  }

  getSpotImage(spot: Spot): string {
    switch (spot.type) {
      case _SpotType.locker:
        return '../../../assets/smart-locker.png';
      case _SpotType.pudo:
        return '../../../assets/commerce.png';
      default:
        return '../../../assets/delivery-unknown.png';
    }
  }

  createOrder() {
    this.deliveryService.enableOrderMode(true);
  }
}
