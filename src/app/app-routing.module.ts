import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CountriesComponent,
    children: [{ path: ':id/:name', component: CountryDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
