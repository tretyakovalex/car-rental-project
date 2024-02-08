import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarListingsComponent } from './pages/car-listings/car-listings.component';
import { BookCarComponent } from './pages/book-car/book-car.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "car-listings", component: CarListingsComponent},
  {path: "book-car", component: BookCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
