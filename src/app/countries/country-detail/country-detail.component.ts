import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Country } from '../country.model';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country: Country;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.country = this.countriesService.getCountry(params['id']);
    });
  }

  onBackToHome() {
    this.router.navigate(['/']);
  }
}
