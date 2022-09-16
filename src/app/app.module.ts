import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HeaderComponent } from './header/header.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { CountryComponent } from './countries/countries-list/country/country.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ValuesExtractPipe } from './values-extract.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HeaderComponent,
    CountriesListComponent,
    CountryDetailComponent,
    CountryComponent,
    ValuesExtractPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
