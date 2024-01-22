import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  deliveryOrderModeSubj: Subject<boolean> = new Subject<boolean>();
  deliveryOrderMode$: Observable<boolean> =
    this.deliveryOrderModeSubj.asObservable();

  constructor() {}

  enableOrderMode(value: boolean) {
    this.deliveryOrderModeSubj.next(value);
  }
}
