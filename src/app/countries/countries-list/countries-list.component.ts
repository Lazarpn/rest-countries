import { Component, DoCheck, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit, DoCheck {
  constructor(private countriesService: CountriesService) {}
  countries: Country[];

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.countries = this.countriesService.getCountries();
  }
}
