import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Spot } from '../config/spots';

@Injectable({
  providedIn: 'root',
})
export class SpotService {
  spotsBs: Subject<Spot[]> = new Subject<Spot[]>();
  spots$: Observable<Spot[]> = this.spotsBs.asObservable();
  private initialSpots: Spot[] = [];
  private spots: Spot[] = [];
  constructor() {}

  getSpots(): Observable<Spot[]> {
    return this.spots$;
  }

  setInitialSpots(spots: Spot[]) {
    this.initialSpots = spots;
    this.spotsBs.next(spots);
  }

  activateSpotByPosition(spot: Spot): void {
    this.initialSpots.map((foundSpot) => {
      foundSpot.active = false;
      if (foundSpot.position === spot.position) {
        foundSpot.active = true;
      }
    });
  }

  updateSpots(spots: Spot[], bounds: any) {
    let filteredSpots: Spot[] = [];
    filteredSpots = spots.filter((spot: Spot) => {
      return (
        spot.position.lat >= bounds.ci.lo &&
        spot.position.lat <= bounds.ci.hi &&
        spot.position.lng >= bounds.Nh.lo &&
        spot.position.lng <= bounds.Nh.hi
      );
    });
    this.spotsBs.next(filteredSpots);
  }
}
