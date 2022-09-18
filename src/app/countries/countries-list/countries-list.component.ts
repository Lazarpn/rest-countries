import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Country } from '../country.model';
import { CountriesService } from '../countries.service';
import { AppScrollService } from '../../app-scroll.service';
import { NgForm } from '@angular/forms';

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
  searchInput = '';
  continentSort = 'All';

  @ViewChild('form', { static: true }) searchForm: NgForm;

  ngOnInit(): void {
    this.countriesService.fetchCountries();
  }

  ngDoCheck(): void {
    this.countries = this.countriesService.getCountries();
    this.spinner = this.countriesService.spinner;

    if (this.searchInput !== '' && this.continentSort === 'All') {
      this.countries = this.countriesService.filterSearchedCountries(
        this.searchInput
      );
    }

    if (this.continentSort !== 'All' && this.searchInput === '') {
      this.countries = this.countriesService.filterByContinent(
        this.continentSort
      );
    }

    if (this.continentSort !== 'All' && this.searchInput !== '') {
      this.countries = this.countriesService.filterByBoth(
        this.continentSort,
        this.searchInput
      );
    }
  }
}
function Import() {
  throw new Error('Function not implemented.');
}
