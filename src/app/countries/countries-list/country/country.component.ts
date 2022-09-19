import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../country.model';
import { AppScrollService } from '../../../app-scroll.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @Input() country: Country;
  @Input() index: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appScrollService: AppScrollService
  ) {}

  ngOnInit(): void {}

  onLoadDetail() {
    this.router.navigate([this.country.id, this.country.name], {
      relativeTo: this.route,
    });
    this.appScrollService.setPosition(window.scrollX, window.scrollY);
  }
}
