import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CountriesService } from './countries/countries.service';

@Injectable({ providedIn: 'root' })
export class GuardService implements CanActivate {
  constructor(
    private router: Router,
    private countriesService: CountriesService,
    private route: ActivatedRoute
  ) {}

  canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      if (this.countriesService.spinner) {
        this.router.navigate(['/'], { relativeTo: this.route });
      } else {
        resolve(true);
      }
    });
  }
}
