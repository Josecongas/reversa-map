import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Spot, inPostMockSpots } from '../config/spots';

@Injectable({
  providedIn: 'root',
})
export class SpotService {
  filteredSpotsBS: Subject<Spot[]> = new Subject<Spot[]>();
  filteredSpots$: Observable<Spot[]> = this.filteredSpotsBS.asObservable();
  activeSpot$: Subject<Spot> = new Subject();
  private initialSpots: Spot[] = [];
  constructor() {}

  setInitialSpots(spots: Spot[]) {
    this.initialSpots = spots;
  }

  activateSpotByPosition(spot: Spot): void {
    this.initialSpots.map((foundSpot) => {
      foundSpot.active = false;
      if (foundSpot.position === spot.position) {
        foundSpot.active = true;
        this.activeSpot$.next(spot);
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
    this.filteredSpotsBS.next(filteredSpots);
  }

  getInpostPoints(): Observable<Spot[]> {
    return of(inPostMockSpots);
  }
}
