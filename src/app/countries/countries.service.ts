import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country.model';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  countriesChanged = new Subject<Country[]>();
  countries: Country[] = [];

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
              country.capital,
              country.flags.svg,
              index
            );
          });
        })
      )
      .subscribe(
        (response) => {
          this.countries = response;
        },
        (error) => {},
        () => {
          this.countriesChanged.next(this.countries);
        }
      );
  }

  getCountry(index: number) {
    return this.countries[index];
  }
}
