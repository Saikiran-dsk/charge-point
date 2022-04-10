import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardComponent } from './components/card/card.component';
import { ChargersDataComponent } from './components/chargers-data/chargers-data.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewMapComponent } from './components/view-map/view-map.component';

import { AgmCoreModule } from '@agm/core';
import { BookingComponent } from './components/booking/booking.component';
@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    CardComponent,
    ChargersDataComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ViewMapComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule, MatCheckboxModule, FormsModule,
    NgxStarRatingModule,
    MatDialogModule,
    AgmCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
