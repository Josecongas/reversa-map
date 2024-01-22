import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpotsComponent } from './spots/spots.component';
import { SpotComponent } from './spots/spot/spot.component';
import { SpotOvermapComponent } from './spot-overmap/spot-overmap.component';
import { FiltersOvermapComponent } from './filters-overmap/filters-overmap.component';
import { SpotsSidebarFilterComponent } from './spots/spots-sidebar-filter/spots-sidebar-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    SpotsComponent,
    SpotComponent,
    SpotOvermapComponent,
    FiltersOvermapComponent,
    SpotsSidebarFilterComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
