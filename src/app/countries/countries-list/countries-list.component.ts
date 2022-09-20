import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Country } from '../country.model';
import { CountriesService } from '../countries.service';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { AppScrollService } from '../../app-scroll.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent
  implements OnInit, DoCheck, OnDestroy, AfterViewInit
{
  constructor(
    private countriesService: CountriesService,
    private viewportScroller: ViewportScroller,
    private appScrollService: AppScrollService
  ) {}
  countries: Country[];
  spinner = true;
  searchInput = '';
  continentSort = 'All';
  error = null;
  private errorSub: Subscription;

  ngOnInit(): void {
    this.countriesService.fetchCountries();
    this.errorSub = this.countriesService.error.subscribe((error) => {
      this.error = error;
    });
  }

  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition(this.appScrollService.getPosition());
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

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
