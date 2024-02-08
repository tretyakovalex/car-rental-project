import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarListingsComponent } from './pages/car-listings/car-listings.component';
import { BookCarComponent } from './pages/book-car/book-car.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SearchCarComponent } from './partials/search-car/search-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarListingsComponent,
    BookCarComponent,
    NavbarComponent,
    SearchCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
