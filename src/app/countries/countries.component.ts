import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CountriesService } from './countries.service';
import { Country } from './country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.fetchCountries();
  }
}
