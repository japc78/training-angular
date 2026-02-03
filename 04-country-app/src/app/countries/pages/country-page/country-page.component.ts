import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private countriesService : CountriesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          return this.countriesService.searchCountryByAlphaCode(params['id']);
        })
      )
      .subscribe(response => {
        // console.log({response});
        if (!response) {
          return this.router.navigate(['/countries']);
        }
        this.country = response;
        return;
      });
  }

  // searchCountry(alphaCode: string) {
  //   this.countriesService.searchCountryByAlphaCode(alphaCode)
  //     .subscribe(countries => {
  //       console.log({countries});
  //     });
  // }

}
