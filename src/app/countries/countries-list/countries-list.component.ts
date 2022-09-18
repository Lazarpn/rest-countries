import { Component, DoCheck, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { CountriesService } from '../countries.service';
import { AppScrollService } from '../../app-scroll.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit, DoCheck {
  constructor(
    private countriesService: CountriesService,
    private appScrollService: AppScrollService
  ) {}
  countries: Country[];
  spinner = true;

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.countries = this.countriesService.getCountries();
    this.spinner = this.countriesService.spinner;
  }
}
