import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country.model';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  countries: Country[] = [];
  spinner = true;
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  fetchCountries() {
    this.http
      .get<[]>('https://restcountries.com/v3.1/all')
      .pipe(
        map((countries: []) => {
          return countries.map(
            (
              country: {
                name: { official: string };
                population: number;
                region: string;
                subregion: string;
                capital: string[];
                flags: { svg: string };
                currencies: { [key: string]: { name: string } };
                languages: { [key: string]: string };
                borders: string[];
                cca3: string;
                continents: string[];
              },
              index: number
            ) => {
              console.log(country);
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
                country.continents,
                index
              );
            }
          );
        })
      )
      .subscribe(
        (responseCountries) => {
          this.countries = responseCountries;
          this.spinner = false;
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  getCountryByIndex(index: number): Country {
    return this.countries[index];
  }
  getCountryByBorder(border: string): Country {
    return this.countries.find((country) => country.shortName === border);
  }
  getCountries(): Country[] {
    return this.countries.slice();
  }

  filterSearchedCountries(name: string) {
    return this.getCountries().filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  filterByContinent(continent: string): Country[] {
    if (continent === 'All') return this.getCountries();
    else {
      return this.getCountries().filter(
        (country) => country.continents.at(0) === continent
      );
    }
  }

  filterByBoth(continent: string, name: string): Country[] {
    return this.getCountries()
      .filter((country) => country.continents.at(0) === continent)
      .filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
  }
}
