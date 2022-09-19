import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { GuardService } from './guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  {
    path: 'countries',
    component: CountriesComponent,
    children: [
      { path: '', component: CountriesListComponent },
      {
        path: ':id/:country-name',
        canActivate: [GuardService],
        component: CountryDetailComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/countries' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
