import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }

  onSearch(value: string) :void{
    this.isLoading = true;

    console.log('Search by Capital value:', value);
    this.countriesService.searchCapital(value).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
