import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Country } from './country.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  countries: Country[] = [];
  spinner = true;
  // countriesChanged = new Subject<Country[]>();

  constructor(private http: HttpClient) {}

  fetchCountries() {
    return this.http
      .get<[]>('https://restcountries.com/v3.1/all')
      .pipe(
        map((countries) => {
          return countries.map((country: any, index: number) => {
            return new Country(
              country.name.official,
              country.population,
              country.region,
              country.subregion,
              country.capital,
              country.flags.svg,
              country.currencies,
              country.languages,
              country.borders,
              country.cca3,
              index
            );
          });
        })
      )
      .subscribe(
        (responseCountries) => {
          this.countries = responseCountries;
          this.spinner = false;
        },
        (error) => {}
        // () => {
        //   this.countriesChanged.next(this.countries);
        // }
      );
  }

  getCountryByIndex(index: number) {
    return this.countries[index];
  }
  getCountryByBorder(border: string) {
    return this.countries.find((country) => country.shortName === border);
  }
  getCountries() {
    return this.countries.slice();
  }
}
