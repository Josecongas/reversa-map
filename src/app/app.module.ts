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
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routing';
import { SpotFinderComponent } from './spot-finder/spot-finder.component';
import { FormsModule } from '@angular/forms';

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
    OrderDeliveryComponent,
    LoginComponent,
    RegisterComponent,
    SpotFinderComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
