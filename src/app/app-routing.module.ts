import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  {
    path: 'countries',
    component: CountriesComponent,
    children: [
      { path: '', component: CountriesListComponent },
      { path: ':id/:country-name', component: CountryDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
