import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries: Country[] = [];
  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.countryService.fetchCountries().subscribe((response) => {
      this.countries = response;
    });
  }
}
