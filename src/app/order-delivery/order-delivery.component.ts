import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.scss'],
})
export class OrderDeliveryComponent implements OnInit {
  constructor(private readonly deliveryService: DeliveryService) {}

  ngOnInit(): void {}

  enableOrderMode(value: boolean) {
    this.deliveryService.enableOrderMode(value);
  }
}
